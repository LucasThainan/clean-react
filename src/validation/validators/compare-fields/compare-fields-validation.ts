import { type FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors'

export class CompareFieldsValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly fieldToCompare: string
  ) { }

  validate (input: object): Error | null {
    return (input as any)[this.field] !== (input as any)[this.fieldToCompare] ? new InvalidFieldError() : null
  }
}
