import type { Ref, InjectionKey } from 'vue'

export type NameType = string | number

export interface CollapseProps {
  modelValue: NameType[];
  // 是否手风琴模式
  accordion?: boolean;
}

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export interface CollapseEmits {
  // >>>
  (e: 'update:modelValue', value: NameType[]): void;
  // >>>
  (e: 'change', value: NameType[]): void;
}

export const collapseInjectionKey: InjectionKey<CollapseContext> = Symbol('collapseInjectionKey')