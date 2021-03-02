/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:14:15
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-02 14:52:13
 * @Description:
 */

import React, { useState } from "react";
import classNames from "classnames";
import LoadingIcon from "../assets/images/loading.png";
import { tuple } from "../utils/types";

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
  style?: object;
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
    prefixCls = "boty-btn",
    type,
    shape,
    size: customizeSize,
    className,
    children,
    loading,
  } = props;

  const [innerLoading, setLoading] = React.useState<Loading>(false);

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

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
    },
    className
  );

  const LoadingNode = (
    <div className="boty-btn-loading">
      <img className="boty-btn-loading-icon" src={LoadingIcon} />
    </div>
  );

  const childrenNode = children || null;

  return (
    <button type={htmlType} className={classes} onClick={handleClick}>
      {innerLoading && LoadingNode}
      {childrenNode}
    </button>
  );
};

export default Button;
