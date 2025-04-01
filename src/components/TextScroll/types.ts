import type { CSSProperties } from 'vue';
export interface Item {
  id: string | number; // 唯一标识
  text: string;
  href?: string;
  itemTextStyle?: CSSProperties; // 每个小点的文本的样式
  target?: '_blank' | '_self'; // 只有在 href 存在时才需要
  disabled?: boolean; // 是否禁用
  onClick?: (e: MouseEvent) => void; // 点击事件
}

export interface TextStyleProps {
  hoverColor?: string; // 鼠标悬停时的颜色
  color?: string; // 文本的颜色 
  backgroundColor?: string; // 文本的背景颜色
}


export interface TextScrollProps {
  textScrollList: Item[]; // 滚动的文本项
  width?: string | number; // 滚动区域的宽度
  height?: string | number; // 滚动区域的高度
  textStyle?: TextStyleProps; // 文本的样式
  gapDistance?: number; // 滚动文本之间的间距 水平为每个文本的间距，垂直为每个文本左右两边的间距
  isSingle?: boolean; // 是否单行滚动 水平每行只展示一个，垂直每列只展示一个
  
  horizontalSpeed?: number; // 水平滚动速度
  horizontalShowNum?: number; // 水平滚动展示的数量 为0 的时候不限制

  isVertical?: boolean; // 是否垂直滚动
  verticalDuration?: number; // 垂直滚动的持续时间
  verticalInterval?: number; // 垂直滚动的间隔时间
  isMouseHoverPause?: boolean; // 鼠标悬停时是否暂停滚动
}


export type TextScrollEmits = {
  (e: 'click', item: Item): void; // 点击事件
}

export interface TextScrollExpose {
  startAnimation: () => void; // 开始动画
  stopAnimation: () => void; // 停止动画
  resetAnimation: () => void; // 重置动画
  isAnimating: boolean; // 是否正在动画中
}