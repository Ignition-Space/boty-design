/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:57:17
 * @LastEditors: Cookie
 * @LastEditTime: 2021-02-27 17:04:30
 * @Description:
 */

export const tuple = <T extends string[]>(...args: T) => args;
export const tupleNum = <T extends number[]>(...args: T) => args;
