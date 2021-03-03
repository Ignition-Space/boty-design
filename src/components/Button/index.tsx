/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:14:15
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-03 12:27:13
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
  className?: string;
  style?: React.HTMLProps<HTMLStyleElement>;
}

interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  danger?: boolean;
  href?: string;
  htmlType?: ButtonHTMLType;
  children?: React.ReactNode;
}

interface INativeButtonProps {
  disabled?: boolean;
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
