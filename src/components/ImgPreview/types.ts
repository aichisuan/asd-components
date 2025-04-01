

export interface ImgOptions {
  // 点击遮罩关闭
  clickMaskClose?: boolean;
  // 显示隐藏关闭按钮
  closeIcon?: boolean;
  // 预览宽度
  width?: number | string;
  // 当前显示的是哪个图片
  showIndex?: number;
  // 缩放比例
  scale?: boolean;
  // 向左旋转 按钮
  rotateLeftIcon?: boolean;
  // 向右旋转 按钮
  rotateRightIcon?: boolean;
  // 下载
  download?: boolean;
  // 缩放step
  stepScale?: number;
  // 最大放大倍数 （建议不修改）
  maxScale?: number;
  // 最小放大倍数 （建议不修改）
  minScale?: number;
  // 默认每次旋转度数 90 度 （建议不修改）
  stepRotate?: number;
  // 是否执行缩放等动画 （建议不修改）
  isAnimation?: boolean;
  // 下载图片名称
  downloadName?: string;
}


export interface ImgPreviewProps {
  visible: boolean;
  imgsData: string[];
  showIndex: number;
  options: ImgOptions;
}



export interface  ActiveImgStatus {
  scale: number;
  x: number;
  y: number;
  rotate: number;
};

export type RotateType = 'left' | 'right'

export interface ImgPreviewEmits {
  (event: 'update:visible', v: boolean): void;
}

export interface VisibleOptions  {
  options: ImgOptions;
  imgsData: string[];
  showIndex: number;
}