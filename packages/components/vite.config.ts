/// <reference types="vitest" />
/*
 * @Author: Cookie
 * @Date: 2021-03-02 13:47:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-23 10:52:25
 * @FilePath: /vite-react-boty-desing/packages/components/vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'boty-design',
      formats: ['es', 'umd', 'cjs']
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
});
