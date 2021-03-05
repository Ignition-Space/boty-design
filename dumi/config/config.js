/*
 * @Author: Cookie
 * @Date: 2021-03-03 13:15:14
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-05 17:15:42
 * @Description:
 */
import { join } from 'path'

export default {
  base: '/boty-design',
  publicPath: '/boty-design/',
  chainWebpack(memo) {
    memo.module
      .rule('js')
      .test(/\.(js|mjs|jsx|ts|tsx)$/)
      .include.add(join(__dirname, '..', '..', 'packages/components/src')).end()
      .exclude.add(/node_modules/).end()
      .use('babel-loader')
  },
  alias: {
    '@boty-design/components': join(__dirname, '..', '..', 'packages/components/src'),
  },
  exportStatic: {},
  logo: 'https://avatars.githubusercontent.com/u/79920730',
};