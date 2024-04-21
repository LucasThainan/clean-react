import { type RenderResult } from '@testing-library/react'

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
