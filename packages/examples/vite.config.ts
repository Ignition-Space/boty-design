/*
 * @Author: Cookie
 * @Date: 2021-03-02 13:47:42
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-03 02:02:09
 * @FilePath: /vite-react-boty-desing/vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5222
  },
  resolve: {},
  plugins: [react()]
});
