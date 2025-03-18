import useZIndex from '../../hooks/useZIndex';
import type { CreateMessageProps, MessageContext } from './types';
import { h, render, shallowReactive } from 'vue';
import MessageConstructor from './Message.vue';

const instances: MessageContext[] = shallowReactive([]);

const formatProps = (props: CreateMessageProps | string): CreateMessageProps => typeof props === 'string' ? { message: props } : props;

let uniqId = 1;

const createMessageIns = (props: CreateMessageProps) => {
  const { nextZIndex } = useZIndex();
  const id = `msg_${uniqId++}`;
  const container = document.createElement('div');
  const destory = () => {
    const index = instances.findIndex((instance) => instance.id === id);
    if (index === -1) return;
    instances.splice(index, 1);
    render(null, container);
    // 清除container
    document.body.removeChild(container);
    props.onClose?.();
  }; 

  const handleDestory = () => {
    const instance = instances.find((instance) => instance.id === id);
    if (instance) {
      instance.vm.exposed!.visible.value = false;
    }
  };

  const newProps = {
    ...props,
    onDestory: destory,
    id,
    zIndex: nextZIndex(),
  }

  const vnode = h(MessageConstructor, newProps);
  // 渲染到页面 @Todo  
  // Invalid prop: type check failed for prop "message". Expected String with value "[object Object]", got Object  h 函数 警告未解决 
  render(vnode, container);
  // 插入页面
  document.body.appendChild(container);

  const vm = vnode.component!;

  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destroy: handleDestory
  }
  instances.push(instance)


  return instance;
};

createMessageIns.success = (props: CreateMessageProps) => {
  return createMessageIns({
    ...formatProps(props),
    type: 'success',
  });
};

createMessageIns.danger = (props: CreateMessageProps) => {
  return createMessageIns({
    ...formatProps(props),
    type: 'danger',
  });
};

createMessageIns.warning = (props: CreateMessageProps) => {
  return createMessageIns({
    ...formatProps(props),
    type: 'warning',
  });
};

createMessageIns.info = (props: CreateMessageProps) => {
  return createMessageIns({
    ...formatProps(props),
    type: 'info',
  });
};

export const createMessage = createMessageIns;


export const getLastInstance = () => {
  return instances[instances.length - 1];
}


export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  // 第一个或者没找到
  if (idx <= 0) return 0; 
  const prev = instances[idx - 1];
  return prev.vm.exposed!.bottomOffset.value;
}

export const closeAll = () => {
  instances.forEach((instance) => {
    instance.destroy();
  });
};


