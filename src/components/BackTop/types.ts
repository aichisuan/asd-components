import type { TooltipProps } from "../Tooltip/types";

export interface BackTopProps {
  right?: string | number; // 右侧位置
  bottom?: string | number; // 底部位置
  visibilityHeight?: number; // 滚动高度达到多少时显示
  bgColor?: string; // 背景颜色
  color?: string; // 文字颜色
  zIndex?: number; // z-index
  shape?: 'circle' | 'shape' | 'rect'; // 圆形或圆角矩形
  tooltipText?: string; // 提示文字
  tooltipProps?: Omit<TooltipProps, 'content'>; // 提示文字属性
  listenEl?: HTMLElement | null; // 监听的元素
  isInListenEl?: boolean; // 是否在监听元素内 只有 listenEl 存在时才生效
}

export interface BackTopEmits {
  (e: "visible-change", value: boolean): void; // 显示或隐藏事件
  (e: "click", event: Event): void; // 点击事件
  (e: "on-progress", value: number): void; // 滚动进度事件
}

