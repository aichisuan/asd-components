export type SwitchValue = number | string | boolean;

export type SwitchProps = {
  modelValue: SwitchValue;
  disabled?: boolean;
  activeText?: string;
  inactiveText?: string;
  // 激活的值
  activeValue?: SwitchValue;
  // 未激活的值
  inactiveValue?: SwitchValue;
  name?: string;
  id?: string;
  size?: 'small' | 'medium' | 'large';
  // activeColor?: string;
}


export type SwitchEmits = {
  (e: 'change', value: SwitchValue): void;
  (e: 'update:modelValue', value: SwitchValue): void;
}