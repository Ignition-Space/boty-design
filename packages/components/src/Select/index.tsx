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

  testProp: boolean;
}

interface BaseSelectProps {
  /**
   * @description 样式前缀
   */
  prefixCls?: string;
}

interface INativeSelectProps {
  /**
   * @description 是否生效
   */
  disabled?: boolean;
}

export type ISelectProps = BaseProps & BaseSelectProps & INativeSelectProps;

const Select = (props: ISelectProps) => {
  console.log('rendered select');
  const { prefixCls, className, style: customStyle } = props;

  const selfPrefixCls = getPrefixCls(prefixCls || 'Select');

  const classes = classNames(selfPrefixCls, className);

  return <div className={classes} style={customStyle}></div>;
};

export default Select;
