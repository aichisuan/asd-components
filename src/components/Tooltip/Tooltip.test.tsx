import { describe, vi, expect, test, beforeEach } from 'vitest';

import Tooltip from './Tooltip.vue';

import { mount } from '@vue/test-utils';

vi.mock('@popperjs/core');

const onVisibleChange = vi.fn();

describe('Tooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  test('should render correctly', async () => {
    const wrapper = mount(
      () => (
        <div>
          <div id="outside"></div>
          <Tooltip content="content" trigger="click" onVisibleChange={onVisibleChange}>
            <div id="target">target</div>
          </Tooltip>
        </div>
      ),
      {
        attachTo: document.body,
      }
    );

    const triggerEl = wrapper.find('#target');

    const tooltipWrapper = wrapper.findComponent(Tooltip);


    expect(wrapper.find('.as-tooltip__popper').exists()).toBeFalsy();
    expect(wrapper.find('.as-tooltip').exists()).toBeTruthy();
    triggerEl.trigger('click');
    await vi.runAllTimers();

    expect(wrapper.find('.as-tooltip__popper').exists()).toBeTruthy();

    expect(wrapper.get('.as-tooltip__popper').text()).toBe('content')
    expect(onVisibleChange).toHaveBeenCalledWith(true)

    wrapper.get('#outside').trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.as-tooltip__popper').exists()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)

  });
});
