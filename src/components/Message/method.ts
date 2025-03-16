import useZIndex from '../../hooks/useZIndex';
import type { CreateMessageProps, MessageContext } from './types';
import { h, render, shallowReactive } from 'vue';
import MessageConstructor from './Message.vue';

const instances: MessageContext[] = shallowReactive([]);

let uniqId = 1;

export const createMessage = (props: CreateMessageProps) => {
  console.log('createMessage', props);
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
  // 渲染到页面
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
  console.log('这里是2')
  instances.push(instance)
  console.log('当前示例列表', instances)


  return instance;
};

export const getLastInstance = () => {
  return instances[instances.length - 1];
}


export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  console.log({idx,id, instances});
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


