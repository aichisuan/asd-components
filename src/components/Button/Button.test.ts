import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from '../Icon/Icon.vue'

describe('Button.vue', () => { 
  test('basic button', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })
    console.log(wrapper.html())
    expect(wrapper.classes()).toContain('as-button--primary')
    // slot 这里可以用 get 或者 find
    expect(wrapper.get('button').text()).toBe('button')
    // events
    wrapper.get('button').trigger('click')
    // 打印事件是否触发
    console.log(wrapper.emitted())
    // 是否有这个属性
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: 'disabled'
      } 
    })
    // disabled 属性是否存在
    expect(wrapper.attributes('disabled')).toBeDefined()
    // 检查原生节点上是否有 disabled 属性
    expect(wrapper.find('button').element.disabled).toBeDefined()
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up'
      },
      slots: {
        default: 'icon'
      },
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })
    console.log(wrapper.html())
    // 判断Icon组件是否存在 直接使用findComponent 对于组件的测试
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    expect(iconElement.exists()).toBeTruthy()
    // 判断Icon组件的属性是否正确
    expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
  test('loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading'
      },
      global: {
        stubs: ['Icon']
      }
    })
    console.log(wrapper.html())
    const iconElement = wrapper.findComponent(Icon)
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
  // round
  test('round', () => {
    const wrapper = mount(Button, {
      props: {
        round: true
      },
      slots: {
        default: 'round'
      }
    })
    expect(wrapper.classes()).toContain('is-round')
  })
  // circle
  test('circle', () => {
    const wrapper = mount(Button, {
      props: {
        circle: true
      },
      slots: {
        default: 'circle'
      }
    })
    expect(wrapper.classes()).toContain('is-circle')
  })
})