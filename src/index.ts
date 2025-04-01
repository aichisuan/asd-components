
// css
import "./styles/index.css"
import "./styles/reset.css"
import "./styles/vars.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons"
import BackTop from "./components/BackTop"
import Avatar from "./components/Avatar"
import Button from "./components/Button"
import Collapse from "./components/Collapse"
import Dropdown from "./components/Dropdown"
import Icon from "./components/Icon"
import ImgPreview from "./components/ImgPreview"
import Input from "./components/Input"
import Message from "./components/Message"
import NumberAnimation from "./components/NumberAnimation"
import Select from "./components/Select"
import Switch from "./components/Switch"
import TextScroll from "./components/TextScroll"
import Tooltip from "./components/Tooltip"
import type { App } from "vue"



library.add(faUserSecret)


library.add(fas)

// Avatar 头像
export type { AvatarProps } from './components/Avatar';
export { default as Avatar } from './components/Avatar';

// BackTop 回到顶部
export type * from './components/BackTop';
export { default as BackTop } from './components/BackTop';

// Button 按钮
export type * from './components/Button';
export { default as Button } from './components/Button';

// Collapse 折叠面板
export type * from './components/Collapse';
export { default as Collapse } from './components/Collapse';
export { default as CollapseItem } from './components/Collapse/itemIndex';

// Dropdown 下拉菜单
export type * from './components/Dropdown';
export { default as Dropdown } from './components/Dropdown';

// Icon 图标
export type * from './components/Icon';
export { default as Icon } from './components/Icon';

// ImgPreview 图片预览
export type * from './components/ImgPreview';
export { default as ImgPreview } from './components/ImgPreview';


// Input 输入框
export type * from './components/Input';
export { default as Input } from './components/Input';

// Message 消息提示
export type * from './components/Message';
export { default as Message } from './components/Message';


// NumberAnimation 数字动画
export type * from './components/NumberAnimation';
export { default as NumberAnimation } from './components/NumberAnimation';


// Select 选择器
export type * from './components/Select';
export { default as Select } from './components/Select';


// Switch 开关
export type * from './components/Switch';
export { default as Switch } from './components/Switch';

// TextScroll 滚动文本
export type * from './components/TextScroll';
export { default as TextScroll } from './components/TextScroll';


// Tooltip 提示
export type * from './components/Tooltip';
export { default as Tooltip } from './components/Tooltip';

const components = {
  Avatar,
  BackTop,
  Button,
  Collapse,
  Dropdown,
  Icon,
  ImgPreview,
  Input,
  Message,
  NumberAnimation,
  Select,
  Switch,
  TextScroll,
  Tooltip
}


export const install = (app: App) => {
  Object.values(components).forEach((component) => {
    if ((component as any).install) {
      app.use(component as any)
    }
  })
}


export default {
  install,
}