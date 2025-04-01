export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success' | 'info' | 'light' | 'dark' | 'link' | 'text'
export type ButtonSize = 'small' | 'medium' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'


export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  // 是否是实体按钮
  plain?: boolean
  // 圆角按钮
  round?: boolean
  // 是否是圆形按钮
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  autofocus?: boolean
  nativeType?: NativeType
  icon?: string
  iconPosition?: 'left' | 'right'
  onClick?: () => void
}

export interface ButtonInstance {
  ref: HTMLElement
}