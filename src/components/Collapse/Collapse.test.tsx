import { describe, test, expect, vi, beforeAll } from "vitest";
import { mount } from "@vue/test-utils";

import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";

import type { VueWrapper, DOMWrapper } from "@vue/test-utils";

const onChange = vi.fn();
let wrapper: VueWrapper<any>;
let headers: DOMWrapper<Element>[];
let contents: DOMWrapper<Element>[];
let firstHeader: DOMWrapper<Element>;
let secondHeader: DOMWrapper<Element>;
let disableHeader: DOMWrapper<Element>;
let firstContent: DOMWrapper<Element>;
let secondContent: DOMWrapper<Element>;
let disableContent: DOMWrapper<Element>;

describe("Collapse.vue", () => {
  beforeAll(() => {
    wrapper = mount(() => (
      <Collapse modelValue={["1"]} onChange={onChange}>
        <CollapseItem name="1" title="title 1">content 1</CollapseItem>
        <CollapseItem name="2" title="title 2">content 2</CollapseItem>
        <CollapseItem name="3" disabled title="title 3">content 3</CollapseItem>
      </Collapse>
    ), {
      global: {
        stubs: ['Icon'],
      },
      // 没加入这个会导致异步问题
      attachTo: document.body
    });
    headers = wrapper.findAll(".as-collapse-item__header");
    contents = wrapper.findAll(".as-collapse-item__content");
    firstHeader = headers[0];
    secondHeader = headers[1];
    disableHeader = headers[2];
    firstContent = contents[0];
    secondContent = contents[1];
    disableContent = contents[2];
  });

  test('测试基础结构', () => {
    expect(headers.length).toBe(3);
    expect(contents.length).toBe(3);
    expect(firstHeader.text()).toBe('title 1');
    expect(secondHeader.text()).toBe('title 2');
    expect(disableHeader.text()).toBe('title 3');
    expect(firstContent.text()).toBe('content 1');
    expect(secondContent.text()).toBe('content 2');
    expect(disableContent.text()).toBe('content 3');

    expect(firstContent.isVisible()).toBe(true);
    expect(secondContent.isVisible()).toBe(false);
  })

  test('测试点击事件', async () => {
    await firstHeader.trigger('click');
    expect(onChange).toHaveBeenCalledWith([]);
    expect(firstContent.isVisible()).toBeFalsy();

    await secondHeader.trigger('click');
    expect(onChange).toHaveBeenCalledWith(["2"]);
    console.log(wrapper.html());
    expect(secondContent.isVisible()).toBeTruthy();
  })

  test('测试发送正确的事件', async () => {
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(['2']);
    expect(onChange).toHaveBeenLastCalledWith(["2"]);
  })
  
  test('测试disabled', async () => {
    onChange.mockClear();
    await disableHeader.trigger('click');
    expect(onChange).not.toHaveBeenCalled();
  })
});

describe("Collapse.vue 手风琴模式", () => {
  beforeAll(() => {
    wrapper = mount(() => (
      <Collapse modelValue={["1"]} accordion onChange={onChange}>
        <CollapseItem name="1" title="title 1">content 1</CollapseItem>
        <CollapseItem name="2" title="title 2">content 2</CollapseItem>
        <CollapseItem name="3" disabled title="title 3">content 3</CollapseItem>
      </Collapse>
    ), {
      global: {
        stubs: ['Icon'],
      },
      attachTo: document.body
    });
    headers = wrapper.findAll(".as-collapse-item__header");
    contents = wrapper.findAll(".as-collapse-item__content");
    firstHeader = headers[0];
    secondHeader = headers[1];
    disableHeader = headers[2];
    firstContent = contents[0];
    secondContent = contents[1];
    disableContent = contents[2];
  });

  test('测试手风琴模式', async () => {
    await secondHeader.trigger('click');
    expect(onChange).toHaveBeenCalledWith(["2"]);
    expect(firstContent.isVisible()).toBeFalsy();
    expect(secondContent.isVisible()).toBeTruthy();
  })
});