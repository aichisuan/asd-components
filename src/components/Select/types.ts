export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}


export interface SelectProps {
  modelValue: string;
  options: SelectOption[];
  // 
  placeholder: string;
  disabled?: boolean;
}


export interface SelectStates {
  inputValue: string;
  selected: SelectOption[];
}


export interface SelectEmits {
  (event: 'change', value: string): void;
  (event: 'update:modelValue', value: string): void;
  (event: 'visible-change', value: boolean): void;
}