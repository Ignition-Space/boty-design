/*
 * @Author: Cookie
 * @Date: 2021-03-03 12:00:19
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-03 12:02:03
 * @Description: 
 */


export const getPrefixCls = (prefixCls: string) => {
  return prefixCls ? `boty-${prefixCls}` : 'boty'
}