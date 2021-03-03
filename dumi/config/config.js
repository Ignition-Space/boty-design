/*
 * @Author: Cookie
 * @Date: 2021-03-03 13:15:14
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-03 15:29:27
 * @Description:
 */
const path = require('path')

export default {
  base: '/boty-design',
  publicPath: '/boty-design/',
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  exportStatic: {},
  logo: 'https://avatars.githubusercontent.com/u/79920730',
};