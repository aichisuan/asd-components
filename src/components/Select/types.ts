export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}


export interface SelectProps {
  modelValue: string;
  options: SelectOption[];
  placeholder: string;
  disabled?: boolean;
}


export interface SelectStates {
  inputValue: string;
  selected: SelectOption[];
}


export interface SelectEmits {
  (event: 'change', value: string | number): void;
  (event: 'update:modelValue', value: string | number): void;
  (event: 'visible-change', value: boolean): void;
}