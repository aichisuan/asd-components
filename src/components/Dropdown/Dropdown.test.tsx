import { describe, test, expect, beforeAll, vi } from 'vitest';
import { h } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import Dropdown from './Dropdown.vue';
import type { MenuOptionItem } from './types';

let wrapper: VueWrapper<any>;
let headers: DOMWrapper<Element>[];
let targetEl: DOMWrapper<Element>;

const menuOptions: MenuOptionItem[] = [
  { key: 1, label: h('b', 'keykeykey可以') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', dividedLine: true },
  { key: 4, label: 'item4' },
];

describe('Button.vue', () => {
  beforeAll(
    () => {
      wrapper = mount(
        () => (
          <div>
            <div id='outside'></div>
            <Dropdown menuOptions={menuOptions} trigger="click">
              <div id="target">target</div>
             </Dropdown>
          </div>
        ),
        {
          attachTo: document.body,
        }
      );
      headers = wrapper.findAll('.as-dropdown__header');
      targetEl = wrapper.find('#target');
      vi.useFakeTimers();
    },
  );

  // 基础测试
  test('basic Dropdown', () => {
    expect(wrapper.find('.as-dropdown__popper').exists()).toBeFalsy();
    expect(wrapper.find('.as-dropdown').exists()).toBeTruthy();
  });

  // 点击目标
  test('click target', async () => {
    targetEl.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.as-dropdown__menu').exists()).toBeTruthy();
  });

  test('click item', async () => {
    const outside = wrapper.find('#outside');
    outside.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.as-dropdown__menu').exists()).toBeFalsy();
    targetEl.trigger('click');
    await vi.runAllTimers();
    const item = wrapper.findAll('.as-dropdown__item')[0];
    item.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.as-dropdown__menu').exists()).toBeFalsy();
  });

  test('click disabled item', async () => {
    targetEl.trigger('click');
    await vi.runAllTimers();
    const disabledItem = wrapper.findAll('.as-dropdown__item')[1];
    disabledItem.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.as-dropdown__menu').exists()).toBeFalsy();
  });
});
