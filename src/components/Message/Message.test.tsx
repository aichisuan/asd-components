import { describe, expect, test } from 'vitest';

import { nextTick } from 'vue';

import { createMessage, closeAll } from './method';

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

// createMessage
describe('createMessage', () => {
  test('创建Message组件', async () => {
    const instance = createMessage({
      message: 'hello world',
      type: 'info',
      duration: 0,
    });
    await rAF();
    expect(instance).toBeDefined();
    expect(document.body.innerHTML).toContain('hello world');
    expect(document.querySelector('.as-message')).toBeTruthy();
    instance.destroy();
    await rAF();
    expect(document.querySelector('.as-message')).toBeFalsy();
  });

  test('多次创建Message组件', async () => {
    const instance1 = createMessage({
      message: 'hello world',
      type: 'info',
      duration: 0,
    });
    await rAF();
    const instance2 = createMessage({
      message: 'hello world2',
      type: 'info',
      duration: 0,
    });
    await rAF();
    expect(document.body.innerHTML).toContain('hello world');
    expect(document.body.innerHTML).toContain('hello world2');
    closeAll();
    await rAF();
    expect(document.querySelector('.as-message')).toBeFalsy();
  });

  test('创建多个实例 offset准确', async () => {
    const instance1 = createMessage({
      message: 'hello world',
      type: 'info',
      duration: 0,
      offset: 20,
    });
    await rAF();
    const instance2 = createMessage({
      message: 'hello world2',
      type: 'info',
      duration: 0,
      offset: 100,
    });
    await rAF();
    await rAF();

    const els = document.querySelectorAll('.as-message');
    expect(els.length).toBe(2);
    const first = els[0] as HTMLElement;
    const second = els[1] as HTMLElement;
    // https://github.com/jsdom/jsdom/issues/1590
    // 在JS-dom 中，对应的 height 返回为零，所以这里的测试用例可以忽略高度的测试
    expect(getTopValue(first)).toBe(20);
    expect(getTopValue(second)).toBe(120);
    closeAll();
    await rAF();
    expect(document.querySelector('.as-message')).toBeFalsy();
  });
});

function getTopValue(el: HTMLElement) {
  const styles = window.getComputedStyle(el);
  const topValue = styles.getPropertyValue('top');
  return Number.parseFloat(topValue);
}
