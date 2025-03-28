 import type { Placement, Options } from "@popperjs/core";
import type { Ref } from "vue";


export interface TooltipProps {
  content?: string;
  trigger?: "hover" | "click" | "focus";
  placement?: Placement;
  options?: Options;
  offset?: [number, number];
  // 是否是手动触发
  isManual?: boolean;
  popperOptions?: Partial<Options>;
  transitionName?: string; // 动画
  delayOpen?: number; // 延迟打开
  delayClose?: number; // 延迟关闭
}





export interface TooltipInstance {
  TooltipRef: Ref<HTMLElement | null>;
  show: () => void;
  hide: () => void;
}

export interface TooltipEmits {
  (e: "visible-change", value: boolean): void;
  (e: "click-outside", value: boolean): void;
}