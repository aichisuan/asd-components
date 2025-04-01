import type { App, Component, Plugin } from "vue";

export const withInstall = (component: Component) => {
  (component as any).install = (app: App) => {
    app.component(component.name as string, component);
  };
  return component as Component & Plugin;
}