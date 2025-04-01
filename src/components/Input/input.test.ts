import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input', () => {
  it('基本展示', () => {
    const wrapper = mount(Input, {
      props: {
        size: 'small',
        type: 'text',
        modelValue: ''
      },
      slots: {
        prepend: 'prepend',
        prefix: 'prefix'
      }
    })
    expect(wrapper.classes()).toContain('as-input--small')
    expect(wrapper.classes()).toContain('as-input--prepend')
    expect(wrapper.find('input').exists()).toBeTruthy()
    expect(wrapper.get('input').attributes('type')).toBe('text')
    expect(wrapper.find('.as-input__prepend').exists()).toBeTruthy()
    expect(wrapper.get('.as-input__prepend').text()).toBe('prepend')
    expect(wrapper.find('.as-input__prefix').exists()).toBeTruthy()
    expect(wrapper.get('.as-input__prefix').text()).toBe('prefix')

    const wrapper2 = mount(Input, {
      props: {
        type: 'textarea',
        modelValue: ''
      }
    })
    expect(wrapper2.find('textarea').exists()).toBeTruthy()
  })

  it('支持 v-model', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
        type: 'text'
      }
    })
    const input = wrapper.get('input')
    expect(input.element.value).toBe('test')
    await input.setValue('update')
    // expect(wrapper.props('modelValue')).toBe('update')
    expect(input.element.value).toBe('update')

    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()).toHaveProperty('change')
    const inputEvent = wrapper.emitted('input')
    const changeEvent = wrapper.emitted('change')
    expect(inputEvent![0]).toEqual(['update'])
    expect(changeEvent![0]).toEqual(['update'])
    await wrapper.setProps({ modelValue: 'prop update' })
    expect(input.element.value).toBe('prop update')
  })

  it('支持点击清空字符串', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        clearable: true,
        type: 'text'
      },
      global: {
        stubs: ['Icon']
      }
    })
    expect(wrapper.find('.as-input__clear').exists()).toBeFalsy()
    const input = wrapper.get('input')
    await input.trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('.as-input__clear').exists()).toBeTruthy()
    await wrapper.get('.as-input__clear').trigger('click')
    expect(input.element.value).toBe('')
    expect(wrapper.emitted()).toHaveProperty('clear')
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()).toHaveProperty('change')
    const inputEvent = wrapper.emitted('input')
    const changeEvent = wrapper.emitted('change')
    expect(inputEvent![0]).toEqual([''])
    expect(changeEvent![0]).toEqual([''])

    await input.trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
  })

  it('支持切换密码显示', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        showPassword: true,
        type: 'text'
      },
      global: {
        stubs: ['Icon']
      }
    })
    expect(wrapper.find('.as-input__password').exists()).toBeFalsy()
    const input = wrapper.get('input')
    expect(input.element.type).toBe('password')
    await input.setValue('123')
    const eyeIcon = wrapper.find('.as-input__password')
    expect(eyeIcon.exists()).toBeTruthy()
    expect(eyeIcon.attributes('icon')).toBe('eye-slash')
    await eyeIcon.trigger('click')
    expect(input.element.type).toBe('text')
    expect(wrapper.find('.as-input__password').attributes('icon')).toBe('eye')
  })
})