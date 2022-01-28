import * as exampleRepository from '../repositories/exampleRepository.js'
import * as exampleValidation from '../validations/exampleValidation.js'

import { validationErrors } from '../validations/handleValidation.js'

import ExampleError from '../errors/ExampleError.js'


const serviceFunction = async (exampleInfo) => {
	const exampleErrors = validationErrors({
		objectToValid: exampleInfo,
		objectValidation: exampleValidation.exampleSchema
	})

	if (exampleErrors) throw new ExampleError(exampleErrors)

	const result = await exampleRepository.repositoryFunction(exampleInfo)

	return result
}



export {
	serviceFunction,
}
