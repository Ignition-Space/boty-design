/*
 * @Author: Cookie
 * @Date: 2021-03-03 13:15:14
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-03 20:34:40
 * @Description:
 */
import { join } from 'path';

export default {
  base: '/boty-design',
  publicPath: '/boty-design/',
  chainWebpack(memo) {
    memo.plugins.delete('copy');
    memo.module
      .rule('js')
      .test(/\.(js|mjs|jsx|ts|tsx)$/)
      .include.add(join(__dirname, '..', '..', 'src/components')).end()
      .exclude.add(/node_modules/).end()
      .use('babel-loader')
  },
  alias: {
    'boty': join(__dirname, '..', '..', 'src/components'),
  },
  exportStatic: {},
  logo: 'https://avatars.githubusercontent.com/u/79920730',
};