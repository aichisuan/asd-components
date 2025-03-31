import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    dts({
      tsconfigPath: './tsconfig.build.json', // 指定 tsconfig 文件路径
      outDir: 'dist/types', // 指定输出目录
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist/esm',
    sourcemap: true,
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'AsdComponents',
      fileName: (format) => `asd-components.${format}.js`,
      formats: ['es'],
    },


    // 此处之后可以动态添加 @TODO
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        '@vueuse/core',
        'decimal.js',
      ],
      output: {
        assetFileNames: (assetInfo) => {
          const { name } = assetInfo; // 解构 assetInfo 对象
          if (name === 'style.css') {
            return 'asd-components.css';
          }
          return name || 'default-name.css'; // Ensure a string is always returned
        },
      },
    },
  },
});
