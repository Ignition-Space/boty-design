/*
 * @Author: Cookie
 * @Date: 2021-03-02 13:47:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-23 10:52:25
 * @FilePath: /vite-react-boty-desing/packages/components/vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'boty-design',
      formats: ['es', 'umd', 'cjs']
    }
  }
});
