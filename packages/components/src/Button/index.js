/*
 * @Author: Cookie
 * @Date: 2021-02-27 16:14:15
 * @LastEditors: Cookie
 * @LastEditTime: 2021-03-05 15:09:29
 * @Description:
 */
import React, { useState } from 'react';
import classNames from 'classnames';
import { LoadingOutlined } from '@ant-design/icons';
import { tuple } from '@boty-design/utils';
import { getPrefixCls } from '../config/provider';
import './index.less';
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
const ButtonShapes = tuple('circle', 'round');
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
const Button = (props) => {
    const { htmlType = 'button', prefixCls, type, shape, size: customizeSize, className, children, loading, style: customStyle, icon, } = props;
    const [innerLoading, setLoading] = useState(false);
    let sizeCls = '';
    switch (customizeSize) {
        case 'large':
            sizeCls = 'lg';
            break;
        case 'small':
            sizeCls = 'sm';
            break;
        default:
            break;
    }
    const handleClick = async (e) => {
        const { onClick } = props;
        if (innerLoading)
            return;
        if (loading) {
            setLoading(true);
            await onClick?.(e);
            setLoading(false);
        }
        else {
            onClick?.(e);
        }
    };
    const selfPrefixCls = getPrefixCls(prefixCls || 'btn');
    const iconType = innerLoading ? 'loading' : icon;
    const classes = classNames(selfPrefixCls, {
        [`${selfPrefixCls}-${type}`]: type,
        [`${selfPrefixCls}-${shape}`]: shape,
        [`${selfPrefixCls}-${sizeCls}`]: sizeCls,
        [`${selfPrefixCls}-icon-only`]: !children && children !== 0 && iconType,
    }, className);
    const iconPrefixCls = getPrefixCls('btn-icon');
    const iconClasses = classNames(iconPrefixCls, {
        [`${iconPrefixCls}-${sizeCls}`]: sizeCls,
    }, className);
    const LoadingNode = () => {
        if (icon)
            return icon;
        return innerLoading && React.createElement(LoadingOutlined, { className: iconClasses });
    };
    const childrenNode = children || null;
    return (React.createElement("button", { type: htmlType, className: classes, onClick: handleClick, style: customStyle },
        LoadingNode(),
        childrenNode));
};
export default Button;
