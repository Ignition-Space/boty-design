/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:14:15
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-03 14:28:03
 * @Description:
 */

import React, { useState } from "react";
import classNames from "classnames";
import {
  LoadingOutlined,
} from '@ant-design/icons';
import { tuple } from "../utils/types";
import { getPrefixCls } from '../config/provider'

import "./index.less";

const ButtonTypes = tuple("default", "primary", "ghost", "dashed", "link", "text");
export type ButtonType = typeof ButtonTypes[number];

const ButtonShapes = tuple("circle", "round");
export type ButtonShape = typeof ButtonShapes[number];

const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export type SizeType = "small" | "middle" | "large" | undefined;

interface BaseProps {
  /**
   * @description 自定义样式名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: React.HTMLProps<HTMLStyleElement>;
}

interface BaseButtonProps {
  /**
   * @description 按钮类型
   */
  type?: ButtonType;
  /**
   * @description 图标组件
   */
  icon?: React.ReactNode;
  /**
   * @description 形状
   */
  shape?: ButtonShape;
  /**
   * @description 大小
   */
  size?: SizeType;
  /**
   * @description loading状态，设置之后会执行异步方法
   */
  loading?: boolean;
  /**
   * @description 样式前缀
   */
  prefixCls?: string;
  /**
   * @description 危险类型
   */
  danger?: boolean;
  /**
   * @description 按钮原生类型
   */
  htmlType?: ButtonHTMLType;
  children?: React.ReactNode;
}

interface INativeButtonProps {
  /**
   * @description 是否生效
   */
  disabled?: boolean;
  /**
   * @description 点击方法
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type IButtonProps = BaseProps & BaseButtonProps & INativeButtonProps;

type Loading = number | boolean;

const Button = (props: IButtonProps) => {
  const {
    htmlType = "button" as IButtonProps["htmlType"],
    prefixCls,
    type,
    shape,
    size: customizeSize,
    className,
    children,
    loading,
    style: customStyle,
    icon
  } = props;

  const [innerLoading, setLoading] = useState<Loading>(false);

  let sizeCls = "";

  switch (customizeSize) {
    case "large":
      sizeCls = "lg";
      break;
    case "small":
      sizeCls = "sm";
      break;
    default:
      break;
  }

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    if (innerLoading) return;
    if (loading) {
      setLoading(true);
      await onClick?.(e);
      setLoading(false);
    } else {
      onClick?.(e);
    }
  };

  const selfPrefixCls = getPrefixCls(prefixCls || 'btn')

  const iconType = innerLoading ? 'loading' : icon;

  const classes = classNames(
    selfPrefixCls,
    {
      [`${selfPrefixCls}-${type}`]: type,
      [`${selfPrefixCls}-${shape}`]: shape,
      [`${selfPrefixCls}-${sizeCls}`]: sizeCls,
      [`${selfPrefixCls}-icon-only`]: !children && children !== 0 && iconType,
    },
    className
  );

  const iconPrefixCls = getPrefixCls('btn-icon')
  const iconClasses = classNames(
    iconPrefixCls,
    {
      [`${iconPrefixCls}-${sizeCls}`]: sizeCls,
    },
    className
  );

  const LoadingNode = () => {
    if (icon) return icon
    return (
      innerLoading &&
      <LoadingOutlined className={iconClasses} />
    )
  }

  const childrenNode = children || null;

  return (
    <button type={htmlType} className={classes} onClick={handleClick} style={customStyle}>
      {LoadingNode()}
      {childrenNode}
    </button>
  );
};

export default Button;
