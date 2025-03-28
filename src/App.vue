<script setup lang="ts">
import { createMessage } from './components/Message/method';
import { ref, h, onMounted } from 'vue';
import Button from './components/Button/Button.vue';
import Collapse from './components/Collapse/Collapse.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Icon from './components/Icon/Icon.vue';
import Dropdown from './components/Dropdown/Dropdown.vue';
import Switch from './components/Switch/Switch.vue';
import Input from './components/Input/Input.vue';
import Select from './components/Select/Select.vue';
import ImgPreview from './components/ImgPreview/ImgPreview.vue';
const openedValue = ref<string[]>(['a']);

const imgDatas = [
  'https://img2.baidu.com/it/u=1565288163,4104186569&fm=253&app=138&f=JPEG?w=675&h=949',
  'https://pic.rmb.bdstatic.com/bjh/240625/fe48c9d6737e8830397fdcfad14c88711180.jpeg',
  'https://q3.itc.cn/images01/20240330/c2c562ebbbb246ffb9a6a8f5ec124e58.jpeg',
  'https://img2.baidu.com/it/u=3514207101,3530803158&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665'
];

const showImgPreview = ref(false);

import type { TooltipInstance } from './components/Tooltip/types.ts';
import Tooltip from './components/Tooltip/Tooltip.vue';
import type { MenuOptionItem } from './components/Dropdown/types';

const toolTipRef = ref<TooltipInstance | null>(null);
const dropDownRef = ref<TooltipInstance | null>(null);

const testSelectVal = ref<string>('1');
const selectOptions = [
  { label: ' 周杰伦', value: '1' },
  { label: '刘亦菲', value: '2' },
  { label: '林俊杰', value: '3' },
  { label: '王力宏', value: '4', disabled: true },
];

const open = () => {
  console.log('open');
  createMessage({ message: 'hello world', showClose: true });
  toolTipRef.value && toolTipRef.value.show();
  dropDownRef.value && dropDownRef.value.show();
};

onMounted(() => {
  // console.log('onMounted');
  // createMessage({ message: 'hello world', duration: 0, showClose: true });
  // createMessage({ message: 'hello world again', duration: 0, type: 'success', showClose: true, offset: 100 });
  // createMessage({ message: 'hello world three', duration: 0, type: 'danger', showClose: true });
});

const close = () => {
  console.log('close');
  toolTipRef.value && toolTipRef.value.hide();
  dropDownRef.value && dropDownRef.value.hide();
};

const menuOptions: MenuOptionItem[] = [
  { key: 1, label: h('b', 'keykeykey可以') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', dividedLine: true },
  { key: 4, label: 'item4' },
];

const handleSelect = (item: any) => {
  console.log('handleSelect event', item);
};
const visibleChange = (visible: boolean) => {
  console.log('visibleChange event', visible);
};
const mouseenterFn = () => {
  console.log('mouseenterFn');
};

const testSelect = ref<string>('');

const testInputVal = ref<string>('');

const hanldeShowImgPreview = () => {
  showImgPreview.value = true;
};
</script>

<template>
  <main>
    <ImgPreview :imgsData="imgDatas" :showIndex="0" :options="{ clickMaskClose: true, closeIcon: true }" v-model:visible="showImgPreview"></ImgPreview>
    <Button round @click="hanldeShowImgPreview">Round Button</Button>
    <!-- 
    <Select v-model="testSelectVal" placeholder="基础选择器，请选择" :options="selectOptions" />
    <Button round @click="hanldeShowImgPreview">Round Button</Button>
    <Button @click="open" @mouseenter="mouseenterFn" circle>AS</Button>
    <Button @click="open" @mouseenter="mouseenterFn" circle icon="arrow-up"></Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary" @click.native="open">Primary</Button>
    <Button type="success" @click.native="close">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Switch v-model="testSelect" activeText="是" inactiveText="" />
    <Tooltip ref="toolTipRef" content="this is tooltip content" trigger="click" placement="top">
      <Button>Tooltip</Button>
    </Tooltip>
    <Tooltip ref="toolTipRef" content="this is tooltip content" trigger="hover" placement="top">
      <Button>Tooltip</Button>
    </Tooltip>
    <Tooltip ref="toolTipRef" trigger="hover" placement="bottom" :delay-open="1000" :delay-close="1000">
      <Button>Tooltip</Button>
      <template #content>
        <div>自定义</div>
        <div>自定义</div>
        <div>自定义</div>
        <div>自定义</div>
      </template>
    </Tooltip>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up"></Button><br /><br />
    icon图标
    <Icon icon="arrow-up" size="2xl" type="danger" color="#0e7a0d" />

    <Collapse v-model="openedValue">
      <CollapseItem name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div>this is bbbbb test</div>
      </CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </CollapseItem>
    </Collapse>

    <Dropdown placement="bottom" trigger="hover" hideAfterClick :menu-options="menuOptions" @select="handleSelect" @visible-change="visibleChange">
      <Button type="info">下拉菜单</Button>
    </Dropdown>
    <Dropdown placement="bottom" divided hideAfterClick :menu-options="menuOptions" @select="handleSelect" @visible-change="visibleChange" ref="dropDownRef">
      <Button type="info">下拉菜单2</Button>
    </Dropdown>
    <br />
    <Switch v-model="testSelect" activeText="是" inactiveText="否" />
    <Switch v-model="testSelect" activeText="是" inactiveText="否" size="large" />
    <Switch v-model="testSelect" activeText="是" inactiveText="否" size="small" />
    <Switch v-model="testSelect" activeText="是" inactiveText="否" disabled />
    <br />
    <Input v-model="testInputVal" placeholder="基础文本框，请输入" />
    <Input v-model="testInputVal" clearable placeholder="输入字符以后可以点击清空" />

    <Input v-model="testInputVal" placeholder="prepend append">
      <template #prepend>Https://</template>
      <template #append>.com</template>
    </Input>

    <Input v-model="testInputVal" placeholder="密码文本框，可以切换" showPassword />

    <Input v-model="testInputVal" placeholder="prefix suffix">
      <template #prefix>
        <Icon icon="fa-user" />
      </template>
      <template #suffix>
        <Icon icon="fa-user" />
      </template>
    </Input>

    <Input v-model="testInputVal" placeholder="大的 Input" size="large"> </Input>
    <Input v-model="testInputVal" placeholder="普通的 Input"> </Input>
    <Input v-model="testInputVal" placeholder="小的 Input" size="small"> </Input>
    <Input v-model="testInputVal" placeholder="可以是一个 Textarea" type="textarea"> </Input>

    <br /> -->
  </main>
</template>
