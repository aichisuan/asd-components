
export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps {
  type?: string;
  modelValue: string;
  size?: InputSize;
  disabled?: boolean;
  clearable?: boolean;
  placeholder?: string;
  showPassword?: boolean;
  readonly?: boolean;
  // 自动补全
  autocomplete?: string; 
  // 自动聚焦
  autofocus?: boolean;
  form?: string;
}

export interface InputInstance {
  ref: HTMLInputElement | HTMLTextAreaElement
}


export interface InputEmits {
  (e: 'change', value: string): void;
  (e: 'update:modelValue', value: string): void;
  (e: 'input', value: string): void;
  (e: 'focus', value: FocusEvent): void;
  (e: 'blur', value: FocusEvent): void;
  (e: 'clear'):void;
}


