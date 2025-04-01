import type { SelectOption } from './types'

export const findOption = (options: SelectOption[], value: string) => {
  return options.find(option => option.value === value)
}