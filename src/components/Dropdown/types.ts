import type { VNode } from "vue";
import type { TooltipProps } from "../Tooltip/types";


export interface MenuOptionItem {
  label: string | VNode;
  key: string | number;
  disabled?: boolean;
  // 分割线
  dividedLine?: boolean;
}

export interface DropdownProps  extends TooltipProps {
  trigger?: 'click' | 'hover';
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
  menuOptions: MenuOptionItem[];
  // 点击之后关闭 下拉框
  hideAfterClick?: boolean;
}

export interface DropdownInstance {
  show: () => void;
  hide: () => void;
}

export interface DropdownEmits {
  (e: 'visible-change', visible: boolean): void;
  (e: 'select', key: MenuOptionItem): void;
}