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
  activeColor?: string;
  inactiveColor?: string;
  name?: string;
  id?: string;
  size?: 'small' | 'medium' | 'large';
}


export type SwitchEmits = {
  (e: 'change', value: SwitchValue): void;
  (e: 'update:modelValue', value: SwitchValue): void;
}