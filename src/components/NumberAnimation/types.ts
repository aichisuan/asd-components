import type { CSSProperties } from "vue"

export type TransitionFunc =
| 'linear'
| 'easeOutSine'
| 'easeInOutSine'
| 'easeInQuad'
| 'easeOutQuad'
| 'easeInOutQuad'
| 'easeInCubic'
| 'easeOutCubic'
| 'easeInOutCubic'
| 'easeInQuart'
| 'easeOutQuart'
| 'easeInOutQuart'
| 'easeInQuint'
| 'easeOutQuint'
| 'easeInOutQuint'
| 'easeInExpo'
| 'easeOutExpo'
| 'easeInOutExpo'
| 'easeInCirc'
| 'easeOutCirc'
| 'easeInOutCirc'
| 'easeInBack'
| 'easeOutBack'
| 'easeInOutBack'


export interface NumberAnimationProps {
  from?: number // 初始值
  to?: number // 结束值
  duration?: number // 动画持续时间
  fixed?: number // 保留小数位
  autoPlay?: boolean // 是否自动播放
  prefix?: string // 前缀
  suffix?: string // 后缀
  thousandsSeparator?: string // 千分位分隔符
  decimalSeparator?: string // 小数点分隔符
  numberStyle?: CSSProperties // 传入数字样式
  transition?: TransitionFunc // 动画函数
}

export interface NumberAnimationEvent {
  (event: 'onStart'): void; // 动画开始回调
  (event: 'onEnd'): void; // 动画结束回调
  (event: 'onUpdate', value: number): void; // 动画更新回调
  (event: 'onPause'): void; // 动画暂停回调
  (event: 'onResume'): void; // 动画恢复回调
}

export interface NumberAnimationExports {
  startPlay: () => void; // 开始播放
}