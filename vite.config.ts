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
      // insertTypesEntry: true, // 在 package.json 中插入 types 字段
      // include: ['src/**/*', 'src/**/**/*'], // 指定需要生成类型的文件范围
      // exclude: ['node_modules', 'dist'], // 排除不需要生成类型的文件夹
      // tsconfigPath: './tsconfig.json', // 指定 tsconfig 文件路径
      tsconfigPath: './tsconfig.build.json', // 指定 tsconfig 文件路径
      // outDir: 'dist/types', // 指定输出目录
    }),
    // eslint({ cache: false }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'AsdComponents',
      fileName: (format) => `asd-components.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          fontawesomeSvgCore: 'fontawesome-svg-core',
          '@fortawesome/free-solid-svg-icons': 'free-solid-svg-icons',
        },
        assetFileNames: (assetInfo) => {
          const { name } = assetInfo; // 解构 assetInfo 对象
          if (name === 'style.css') {
            return 'asd-components.css';
          }
          return name || 'default-name.css'; // Ensure a string is always returned
        }
      },
    },
  },
});
