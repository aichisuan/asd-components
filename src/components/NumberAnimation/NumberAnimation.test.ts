import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import NumberAnimation from './NumberAnimation.vue';

// 辅助函数，等待下一个动画帧
const rAF = async () => {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        await nextTick();
        resolve(null);
      });
    });
  });
};

describe('NumberAnimation.vue', () => {
  let wrapper: any;
  let originalRAF: typeof window.requestAnimationFrame;

  beforeEach(() => {
    // 保存原始 requestAnimationFrame
    originalRAF = window.requestAnimationFrame;
    
    // 启用虚拟计时器
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'Date'] });
    
    // 显式模拟 requestAnimationFrame
    window.requestAnimationFrame = (callback: FrameRequestCallback): number => {
      return setTimeout(() => callback(Date.now()), 16) as unknown as number;
    };

    wrapper = mount(NumberAnimation, {
      props: {
        from: 0,
        to: 100,
        duration: 1000,
      },
    });
  });

  afterEach(() => {
    // 恢复原始的 requestAnimationFrame
    window.requestAnimationFrame = originalRAF;
    vi.useRealTimers();
    vi.clearAllTimers();
  });

  test('should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text()).toContain('0'); // 初始值为 0
  });

  test('should animate to the end value', async () => {
    await wrapper.setProps({ to: 200 });

    // 使用 runAllTimers 代替 advanceTimersByTime
    vi.runAllTimers();
    await nextTick();

    // 验证动画结束时的值
    expect(wrapper.text()).toContain('200');
  });

  test('should respect fixed decimal places', async () => {
    await wrapper.setProps({ to: 123.456, fixed: 2 });

    vi.runAllTimers();
    await nextTick();

    expect(wrapper.text()).toContain('123.45'); // 保留两位小数
  });

  test('should apply prefix and suffix', async () => {
    await wrapper.setProps({ to: 1000, prefix: '$', suffix: ' 元', thousandsSeparator: '' });

    vi.runAllTimers();
    await nextTick();
    expect(wrapper.text()).toContain('$1000 元'); // 添加前缀和后缀
  });

  test('should emit start and end events', async () => {
    await wrapper.setProps({ to: 500 });

    // 执行所有定时器
    vi.runAllTimers();
    await nextTick();
    
    // 检查是否触发了开始和结束事件
    const emitted = wrapper.emitted();
    expect(emitted).toHaveProperty('onStart');
    expect(emitted).toHaveProperty('onEnd');
  });
  // 测试动画效果
});

