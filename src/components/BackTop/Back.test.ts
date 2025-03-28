import { describe, test, expect, vi, beforeEach } from 'vitest';
import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import BackTop from './BackTop.vue';

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


describe('BackTop.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(BackTop, {
      props: {
        visibilityHeight: 200,
        right: '30px',
        bottom: '30px',
      },
    });
  });

  test('should render correctly', () => {
    expect(wrapper.find('.as-back-top').exists()).toBeTruthy();
    expect(wrapper.find('.as-back-top').isVisible()).toBeFalsy(); // 默认不可见
  });


  test('should hide when scroll height is below visibilityHeight', async () => {
    Object.defineProperty(window, 'scrollY', { value: 150, writable: true });
    window.dispatchEvent(new Event('scroll'));
    await rAF();
    expect(wrapper.find('.as-back-top').isVisible()).toBeFalsy();
  });

  test('should scroll to top when clicked', async () => {
    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    Object.defineProperty(window, 'scrollY', { value: 250, writable: true });
    window.dispatchEvent(new Event('scroll'));
    await wrapper.vm.$nextTick();

    await wrapper.find('.as-back-top').trigger('click');
  });

  test('should apply custom styles', () => {
    wrapper = mount(BackTop, {
      props: {
        right: '50px',
        bottom: '50px',
        bgColor: 'rgb(52, 152, 219)',
        color: 'rgb(255, 255, 255)',
      },
    });

    const backTopEl = wrapper.find('.as-back-top');
    console.log(backTopEl.attributes('style'));
    expect(backTopEl.attributes('style')).toContain('right: 50px;');
    expect(backTopEl.attributes('style')).toContain('bottom: 50px;');
    expect(backTopEl.attributes('style')).toContain('background-color: rgb(52, 152, 219);');
    expect(backTopEl.attributes('style')).toContain('color: rgb(255, 255, 255);');
  });

  test('should emit click event', async () => {
    Object.defineProperty(window, 'scrollY', { value: 250, writable: true });
    window.dispatchEvent(new Event('scroll'));
    await rAF();
    await wrapper.find('.as-back-top').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});