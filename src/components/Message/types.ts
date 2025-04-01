import type { VNode, ComponentInternalInstance } from 'vue';

 export interface MessageProps {
  message?: string;
  type?: 'success'| 'info'| 'warning'| 'danger';
  showClose?: boolean;
  duration?: number;
  onDestory?: () => void;
  onClose?: () => void;
  id: string;
  zIndex: number;
  offset?: number;
  transitionName?: string;
 }

 export interface MessageContext {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: MessageProps;
  destroy: () => void;
 }

 export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>;