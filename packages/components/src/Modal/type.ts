import type { CSSProperties, ReactNode } from 'react';
import type { IButtonProps } from '../Button';

type BaseProps = {
  /** 对话框外层容器的类名 */
  className?: string;

  /** 对话框外层容器的自定义样式 */
  style?: React.HTMLProps<HTMLStyleElement>;
};

export type ModalProps = {
  /** 对话框外层容器的类名 */
  wrapClassName?: string;

  /** 指定 Modal 挂载的节点，但依旧为全局展示，false 为挂载在当前位置, 默认为document.body */
  getContainer?: HTMLElement | (() => HTMLElement) | false;

  /** 是否展示遮罩, 默认为 true */
  mask?: boolean;

  /** 点击遮罩是否允许关闭, 默认为 true */
  maskClosable?: boolean;

  /** 遮罩样式 */
  maskStyle?: CSSProperties;

  /** 是否支持键盘 esc 关闭, 默认为 true */
  keyboard?: boolean;

  /** Modal body 样式 */
  bodyStyle?: CSSProperties;

  /** 宽度, 默认为 520 */
  width?: string | number;

  /** 设置 Modal 的 z-index, 默认为 1000 */
  zIndex?: number;

  /** 取消按钮文字, 默认为 取消 */
  cancelText?: ReactNode;

  /** 确认按钮文字, 默认为 确认 */
  okText?: ReactNode;

  /** 标题 */
  title?: ReactNode;

  /** 底部内容，当不需要默认底部按钮时，可以设为 footer={null}, 默认为 (确定取消按钮) */
  footer?: ReactNode;

  /** 对话框是否可见 */
  open?: boolean;

  /** 点击遮罩层或右上角叉或取消按钮的回调 */
  onCancel?: () => void;

  /** 点击确定回调 */
  onOk?: () => void;

  /** 确定按钮 loading */
  confirmLoading?: boolean;

  /** ok 按钮 props */
  okButtonProps?: IButtonProps;

  /** cancel 按钮 props */
  cancelButtonProps?: IButtonProps;

  /** 是否显示右上角的关闭按钮 default true */
  closable?: boolean;
} & BaseProps;
