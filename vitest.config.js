import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';


// import VueMacros from

export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
  },
});
