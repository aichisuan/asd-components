import { h, render } from 'vue';
import imgPreview from './ImgPreview.vue';
import type { VisibleOptions } from './types';

let instance: any = null;

const createImgPreview = (options: VisibleOptions) => {
  if (instance) {
    instance.visible = true; // 更新为 visible
    return instance;
  }

  const container = document.createElement('div');
  const vnode = h(imgPreview, {
    visible: true, // 绑定 visible
    ...options,
    'onUpdate:visible': (value: boolean) => {
      instance.visible = value; // 同步更新实例的 visible
      if (!value) {
        destroy(); // 当 visible 为 false 时销毁实例
      }
    },
  });

  render(vnode, container);
  document.body.appendChild(container);

  instance = vnode.component!;

  const destroy = () => {
    render(null, container);
    document.body.removeChild(container);
    instance = null;
  };

  instance.destroy = destroy;

  return instance;
};

imgPreview.show = (options: VisibleOptions) => {
  return createImgPreview(options);
};

imgPreview.hide = () => {
  if (instance) {
    instance.visible = false; // 设置 visible 为 false
  }
};

imgPreview.destroy = () => {
  if (instance) {
    instance.destroy();
  }
};

export default imgPreview;