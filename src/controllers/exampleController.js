import * as exampleService from '../services/exampleService.js'


const controllerFunction = async (req, res, next) => {
	const { body: exampleInfo } = req

	try {
		const result = await exampleService.serviceFunction(exampleInfo)
		
		return res.status(201).send(result)

	} catch (error) {
		const { name: errorName, message, status } = error

		if (errorName === 'ExampleError') return res.status(status).send(message)
		
		next(error)
	}
}


export {
	controllerFunction,
}
