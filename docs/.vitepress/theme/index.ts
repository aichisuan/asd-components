import DefaultTheme from 'vitepress/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { AntDesignContainer } from '@vitepress-demo-preview/component'

import '@vitepress-demo-preview/component/dist/style.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import '../../../src/styles/index.css'
import './custom.css'

import "asd-components/dist/index.css"


library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', AntDesignContainer)
  }  
}