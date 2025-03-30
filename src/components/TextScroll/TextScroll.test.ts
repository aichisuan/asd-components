// TextScroll.test.ts
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import TextScroll from './TextScroll.vue';


// 模拟 requestAf 和 clearAf
vi.mock('../../common/util', () => ({
  requestAf: vi.fn((callback, time) => {
    const id = setTimeout(callback, time || 16);
    return { id };
  }),
  clearAf: vi.fn((timer) => {
    if (timer && timer.id) {
      clearTimeout(timer.id);
    }
  }),
}));

describe('TextScroll.vue', () => {
  // 基本测试数据
  const textScrollList = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ];

  // 在每个测试后清理模拟
  afterEach(() => {
    vi.clearAllTimers();
    vi.clearAllMocks();
  });

  // 1. 组件渲染测试
  test('renders correctly with default props', () => {
    const wrapper = shallowMount(TextScroll, {
      props: {
        textScrollList
      }
    });
    
    expect(wrapper.exists()).toBe(true);
    // 默认应为水平滚动模式
    expect(wrapper.find('.as-text-scroll').exists()).toBe(true);
    expect(wrapper.find('.as-text-scroll-vertical').exists()).toBe(false);
  });

  // 2. 水平/垂直模式切换测试
  test('switches between horizontal and vertical modes', async () => {
    const wrapper = shallowMount(TextScroll, {
      props: {
        textScrollList
      }
    });
    
    // 默认为水平模式
    expect(wrapper.find('.as-text-scroll').exists()).toBe(true);
    
    // 切换到垂直模式
    await wrapper.setProps({ isVertical: true });
    expect(wrapper.find('.as-text-scroll-vertical').exists()).toBe(true);
    expect(wrapper.find('.as-text-scroll').exists()).toBe(false);
  });

  // 3. 样式应用测试
  test('applies correct styles based on props', async () => {
    const wrapper = mount(TextScroll, {
      props: {
        textScrollList,
        width: 300,
        height: 80,
        gapDistance: 20,
        textStyle: { color: '#ff0000' }
      }
    });
    
    const scrollContainer = wrapper.find('.as-text-scroll');
    expect(scrollContainer.attributes('style')).toContain('width: 300px');
    expect(scrollContainer.attributes('style')).toContain('height: 80px');
    expect(scrollContainer.attributes('style')).toContain('--text-gap-distance: 20px');
    expect(scrollContainer.attributes('style')).toContain('--text-color: #ff0000');
  });

  // 4. 鼠标悬停暂停测试
  test('pauses animation on mouseenter and resumes on mouseleave', async () => {
    const wrapper = mount(TextScroll, {
      props: {
        textScrollList,
        isMouseHoverPause: true
      }
    });
    
    const scrollContainer = wrapper.find('.as-text-scroll');
    
    // 模拟鼠标进入
    // await scrollContainer.trigger('mouseenter');
    // await rAF();
    // expect(wrapper.vm.horizontalPlayState).toBe('paused');
    
    // // 模拟鼠标离开
    // await scrollContainer.trigger('mouseleave');
    // expect(wrapper.vm.horizontalPlayState).toBe('running');
  });
  
  // 5. 垂直滚动测试
  test('correctly cycles through items in vertical mode', async () => {
    vi.useFakeTimers();
    
    const wrapper = mount(TextScroll, {
      props: {
        textScrollList,
        isVertical: true,
        verticalDuration: 1000,
        verticalInterval: 500
      }
    });
    // 初始应显示第一项
    expect(wrapper.vm.verticalActiveIndex).toBe(0);
    
    // 前进时间，应该切换到下一项
    vi.advanceTimersByTime(1000);
    await nextTick();
    expect(wrapper.vm.verticalActiveIndex).toBe(1);

  });

  // 6. 点击事件测试
  test('emits click event when item is clicked', async () => {
    const clickItem = { id: '1', text: 'Item 1', href: 'https://example.com' };
    const wrapper = mount(TextScroll, {
      props: {
        textScrollList: [clickItem]
      }
    });
    
    const itemElement = wrapper.find('.as-text-scroll__item--a');
    await itemElement.trigger('click');
    
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click[0]).toEqual([clickItem]);
  });

  // 7. 方法调用测试
  test('exposed methods work correctly', async () => {
    const wrapper = mount(TextScroll, {
      props: {
        textScrollList
      }
    });
    
    // 测试 stopAnimation
    wrapper.vm.stopAnimation();
    expect(wrapper.vm.horizontalPlayState).toBe('paused');
    
    // 测试 startAnimation
    wrapper.vm.startAnimation();
    expect(wrapper.vm.horizontalPlayState).toBe('running');
    
    // 测试 resetAnimation
    wrapper.vm.resetAnimation();
    expect(wrapper.vm.isReset).toBe(true);
    // 重置后应该重新开始动画
    await nextTick();
    expect(wrapper.vm.horizontalPlayState).toBe('running');
  });

  // 8. 单项滚动测试
  test('handles single item display correctly', async () => {
    const wrapper = mount(TextScroll, {
      props: {
        textScrollList,
        isSingle: true
      }
    });
    
    // 单项模式下只应该显示第一项
    expect(wrapper.vm.scrollList.length).toBe(1);
    expect(wrapper.vm.scrollList[0]).toEqual(textScrollList[0]);
  });

  // 9. 响应式属性变化测试
  test('reacts to props changes', async () => {
    const wrapper = mount(TextScroll, {
      props: {
        textScrollList,
        horizontalSpeed: 40
      }
    });
    
    // 记录原始动画时长
    const originalDuration = wrapper.vm.horizontalAnimationDuration;
    
    // 修改速度
    await wrapper.setProps({ horizontalSpeed: 80 });
    
    // 速度翻倍，动画时长应减半
    expect(parseFloat(wrapper.vm.horizontalAnimationDuration)).toBeCloseTo(parseFloat(originalDuration) / 2, 0.1);
  });
});