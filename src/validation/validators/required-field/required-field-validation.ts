import { type FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error | null {
    return (input as any)[this.field] ? null : new RequiredFieldError()
  }
}
