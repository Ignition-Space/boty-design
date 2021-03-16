import React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../config/provider';

import './index.less';


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

interface Base{{name}}Props {
    /**
     * @description 样式前缀
     */
    prefixCls?: string;
}

interface INative{{name}}Props {
    /**
     * @description 是否生效
     */
    disabled?: boolean;
}

export type I{{name}}Props = BaseProps & Base{{name}}Props & INative{{name}}Props;


const {{name}} = (props: I{{name}}Props) => {
    const {
        prefixCls,
        className,
        style: customStyle,
    } = props;


    const selfPrefixCls = getPrefixCls(prefixCls || '{{name}}');

    const classes = classNames(
        selfPrefixCls,
        className
    );

    return (
        <{{name}}
            className={classes}
            style={customStyle}
        >
        </{{name}}>
    );
};

export default {{name}};
