import { type FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (input: object): Error | null {
    return (input as any)[this.field]?.length < this.minLength ? new InvalidFieldError() : null
  }
}
