import type { Slot, VNode } from "vue";

export type AvatarSizeStr = 'small' | 'default' | 'large';

export interface AvatarProps {
  // 头像 图片类头像资源地址
  src?: string;
  // 头像大小
  size?: AvatarSizeStr | number;
  // 头像形状
  shape?: 'circle' | 'square';
  // 头像图标
  icon?: VNode | Slot;
  // 头像背景色
  bgColor?: string;
  // 图片无法显示时的替代文本
  alt?: string;
  // 是否有边框
  bordered?: boolean;
  // 是否有动画 悬浮 旋转
  animatedRotate?: boolean;
  // 头像 跳转target 相当于a标签的target属性
  target?: '_blank' | '_self' 
  // 头像跳转链接
  href?: string;
}


