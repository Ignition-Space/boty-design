/*
 * @Author: Cookie
 * @Date: 2021-03-02 13:47:42
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-09 17:12:00
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
      formats:['es','umd','cjs']
    }
  }
});
