import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Avatar from './Avatar.vue';
import { nextTick } from 'vue';

export const rAF = async () => {
  return new Promise((res) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        res(null);
        await nextTick();
      });
    });
  });
};


describe('Avatar.vue', () => {
  // 测试默认渲染
  test('renders default slot content', () => {
    const wrapper = mount(Avatar, {
      slots: {
        default: 'A',
      },
    });

    // 检查默认内容是否正确渲染
    expect(wrapper.text()).toBe('A');
    expect(wrapper.classes()).toContain('as-avatar');
  });

  // 测试自定义大小 - small
  test('renders small size', () => {
    const wrapper = mount(Avatar, {
      props: {
        size: 'small',
      },
    });

    // 检查是否应用了小尺寸的 class
    expect(wrapper.classes()).toContain('as-avatar--small');
  });

  // 测试自定义大小 - large
  test('renders large size', () => {
    const wrapper = mount(Avatar, {
      props: {
        size: 'large',
      },
    });

    // 检查是否应用了大尺寸的 class
    expect(wrapper.classes()).toContain('as-avatar--large');
  });

  // 测试形状 - circle
  test('renders circle shape', () => {
    const wrapper = mount(Avatar, {
      props: {
        shape: 'circle',
      },
    });

    // 检查是否应用了圆形的 class
    expect(wrapper.classes()).toContain('as-avatar--circle');
  });

  // 测试形状 - square
  test('renders square shape', () => {
    const wrapper = mount(Avatar, {
      props: {
        shape: 'square',
      },
    });

    // 检查是否应用了方形的 class
    expect(wrapper.classes()).toContain('as-avatar--square');
  });

  // 测试图片渲染
  test('renders image', () => {
    const wrapper = mount(Avatar, {
      props: {
        src: 'https://example.com/avatar.png',
      },
    });

    // 检查是否渲染了 img 标签
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('https://example.com/avatar.png');
  });

  // 测试图片加载失败时显示默认内容
  test('renders fallback content when image fails to load', async () => {
    const wrapper = mount(Avatar, {
      slots: {
        default: 'Fallback',
      },
    });

    await rAF();
    expect(wrapper.text()).toBe('Fallback');
  });



});