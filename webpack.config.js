/*
 * @Author: Cookie
 * @Date: 2021-03-05 17:25:38
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-05 17:27:33
 * @FilePath: /vite-react-boty-desing/webpack.config.js
 * @Description: 
 */

/**
 * 不是真实的 webpack 配置，仅为兼容 webstorm 和 intellij idea 代码跳转
 * ref: https://github.com/umijs/umi/issues/1109#issuecomment-423380125
 */

module.exports = {
  resolve: {
    alias: {
      '@boty-design': require('path').resolve(__dirname, 'packages'), // eslint-disable-line
    },
  },
};
