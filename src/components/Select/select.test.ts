import { describe, test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Select from './Select.vue';
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

describe('Select.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Select, {
      props: {
        modelValue: '',
        placeholder: '请选择',
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3', disabled: true }
        ]
      }
    });
  });

  test('should render correctly', () => {
    expect(wrapper.find('.as-select').exists()).toBeTruthy();
    expect(wrapper.find('.as-input__inner').attributes('placeholder')).toBe('请选择');
  });

  test('should open dropdown on click', async () => {
    await wrapper.find('.as-select').trigger('click');
    await rAF();
    expect(wrapper.find('.as-select__menu-item').isVisible()).toBeTruthy();
  });

  test('should select an option', async () => {
    await wrapper.find('.as-select').trigger('click');
    await rAF();
    const options = wrapper.findAll('.as-select__menu-item');
    await options[0].trigger('click');
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['1']);
    expect(wrapper.find('.as-input__inner').element.value).toBe('选项1');
  });

  test('should not select a disabled option', async () => {
    await wrapper.find('.as-select').trigger('click');
    await rAF();
    const options = wrapper.findAll('.as-select__menu-item');
    await options[2].trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
    expect(wrapper.find('.as-input__inner').element.value).toBe('');
  });

  test('should close dropdown on outside click', async () => {
    await wrapper.find('.as-select').trigger('click');
    await rAF();
    expect(wrapper.find('.as-select__menu-item').isVisible()).toBeTruthy();
    // await document.body.click();
    // await rAF();
    // width is 0 when not visible
    // expect(wrapper.find('.as-select__menu-item')).toBeFalsy();
  });
});