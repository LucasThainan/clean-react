import { fireEvent, type RenderResult } from '@testing-library/react'
import { faker } from '@faker-js/faker'

export const testChildCount = (sut: RenderResult, elementName: string, count: number): void => {
  const element = sut.getByTestId(elementName)
  expect(element.childElementCount).toBe(count)
}

export const testButtonIsDisabled = (sut: RenderResult, elementName: string, isDisabled: boolean): void => {
  const button = sut.getByTestId(elementName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

export const testStatusForField = (sut: RenderResult, fieldName: string, validationError?: string): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError ?? 'Tudo certo!')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

export const populateField = (sut: RenderResult, fieldName: string, value = faker.word.words()): void => {
  const input = sut.getByTestId(fieldName)
  fireEvent.input(input, { target: { value } })
}

export const testElementExists = (sut: RenderResult, elementName: string): void => {
  const element = sut.getByTestId(elementName)
  expect(element).toBeTruthy()
}
