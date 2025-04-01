import type { App, Plugin } from 'vue'

import * as components from './componentsUtil'
export * from './componentsUtil'
export type * from './componentsUtil'

export const install = (app: App) => {
  Object.values(components).forEach((component) => {
    if ((component as Plugin).install) {
      app.use(component as Plugin)
    }
  })
}


export default {
  install,
}