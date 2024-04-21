import { CompareFieldsValidation } from './compare-fields-validation'
import { InvalidFieldError } from '@/validation/errors'
import { faker } from '@faker-js/faker'

const makeSut = (valueToCompare: string): CompareFieldsValidation => new CompareFieldsValidation(faker.database.column(), valueToCompare)

describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const sut = makeSut(faker.word.words())
    const error = sut.validate(faker.word.words())
    expect(error).toEqual(new InvalidFieldError())
  })
})
