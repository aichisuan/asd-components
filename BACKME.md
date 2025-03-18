## as-component 一个致力于解决前端开发疑难杂症的UI库

## css BEM 命名

## 测试

* Mocha
* Jest
* ## Vitest
* npm i vitest -D
* 使用expect写法
* npx vitest expect
* callback test  mock
* const mockedAxios = axios as Mocked `<type of axios>`
* vue test utils
* npm i @vue/test-utils -D
* 配置 vitest.config.js
* test.only test.skip
* query  find/get findAll findComponent
* text html classes()  attributes
* 模拟子组件sub
* vite-plugin-dts -D

## 每个组件的分析

### button 按钮

* type  default primary Danger
* Plain 朴素按钮 展示朴素按钮
* Round 圆角
* Circle 按钮
* size Normal small Large
* Disabled
* 图标
* loading

button 组件本质其实就是添加class

### Collapse

* props :  modelValue 一个数组，传入打开的 collapseItem
* props ： accordion 是否是手风琴格式
* emit ： update:modelValue
* emit ：  change
* provide： handleItemClick activeNames

#### collapseItem

* transition slide
* click => inject handleItemClick

### Icon

* inheritAttrs：false 不继承属性
* $props
* $attrs
* fontawesome
* npm i --save @fortawesome/fontawesome-svg-core // 安装svgcore
* npm i @fortawesome/free-solid-svg-icons -S // 安装图标库
* npm i @fortawesome/vue-fontawesome@latest-3 // 安装vue3 的包装
* npm i lodash-es --save
* npm i @types/lodash-es -D
* button 加上 icon
* collapse 加上 icon

### ToolTip

* />>>>>>>>有bug待检查
* 触发区 显示区
* hover click 手动
* 触发区 触发事件 clickoutside 展示或者隐藏
* 支持点击外部隐藏，并且有开关确认
* 移动到tooltip上不希望消失 >>>>>Bug
* 支持手动调用，手动调用 那么事件就不成立
* popper 库实现浮层  pnpm i @popperjs/core -S
* v-on="events" events = {.....}
* 支持popper参数
* 动画
* 支持延迟显示
* 样式
* 测试用例

### Dropdown

* menuOption
  * label string | VNode
  * key
  * disabled?
  * divided? 分隔符

### Message

* 提示可以叠加 可以在一定时间后消失
* 可以弹出多个提示
* 有多种类型
* 可以在四面八方显示 （未完成）

### Input

* 支持Textarea/input/password
* 支持不同大小
* 支持一键清空
* 支持密码显示
* 支持前缀后缀slot 一般图标
* 支持复合型输入框 自定义前置后置 一般按钮
* 一些原生属性支持

### Switch

* 功能类似checkbox，内部由一个checkbox工作，
* 样式

### Select

* 基本功能
  * 点击展开下拉菜单
  * 点击菜单中的某一项，下拉菜单关闭
  * Select获取选中状态，并且填充对应选项
* 组件本质：进阶版本的Dropdown， input 组件 Tooltip组件的组合
* 高级功能
  * 可清空选项：当Hover的时候，在组件右侧显示一个可清空选项按钮，点击以后清空选中的值
  * 自定义模版：可以自定义，下拉菜单的选项的格式
  * 可筛选选项：input允许输入，输入后可以根据输入字符自动过滤下拉菜单的选项
  * 支持远程搜索（）：类似自动联想，可以根据输入的字符发送请求，渲染返回的内容
  * 扩展支持：比如键盘移动
  * 支持多选（？？？？？  ）

### Form

### ImgPreview

### ImgClip 截图

### LazyloadImg

### progressiveImage

### VideoContral

### MusicContral

### ClipboardWrap

### Calendar  日历

### carousel3d

### City-Select

### 组件开发方法论

* 根据需求初步确定属性/ 事件 slots/expose
* 组件静态版本
* 将需求中有行为的功能做成开发计划列表
* 根据列表一项一项 的完成功能
* 样式/测试 等收尾工作
