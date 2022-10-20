import { createPortal } from 'react-dom';
import classnames from 'classnames';

import { getPrefixCls } from '../config/provider';
import Button from '../Button';
import { useModal } from './hooks';

import type { FC, PropsWithChildren } from 'react';
import type { ModalProps } from './type';

import './index.less';

const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const {
    className,
    wrapClassName,
    style,

    closable = true,
    mask = true,
    maskClosable = true,
    maskStyle,

    getContainer = document.body,
    bodyStyle,
    zIndex = 1000,
    width = 520,

    title,
    footer = true,
    cancelText = '取消',
    cancelButtonProps,
    okText = '确定',
    okButtonProps,
    confirmLoading,
    children
  } = props;

  const { modalRef, handleClose, handleOk, handleKeyDown } = useModal(props);

  const selfPrefixCls = getPrefixCls('modal');

  const rootClass = classnames(className, `${selfPrefixCls}-root`);
  const wapperClass = classnames(wrapClassName, `${selfPrefixCls}-wapper`);

  const DefaultFooter = () => (
    <>
      <Button {...cancelButtonProps} onClick={handleClose}>
        {cancelText}
      </Button>
      <Button {...okButtonProps} loading={confirmLoading} onClick={handleOk}>
        {okText}
      </Button>
    </>
  );

  const ModalDOM = (
    <div
      ref={modalRef}
      className={rootClass}
      onKeyDown={handleKeyDown}
      style={{ zIndex, ...style }}
    >
      {mask && (
        <div
          className={`${selfPrefixCls}-mask`}
          style={maskStyle}
          onClick={maskClosable ? handleClose : undefined}
        />
      )}
      <div className={wapperClass}>
        <div
          className={`${selfPrefixCls}-container`}
          style={{ width, ...bodyStyle }}
        >
          {closable ? (
            <div className={`${selfPrefixCls}-close`} onClick={handleClose}>
              X
            </div>
          ) : null}

          {title ? (
            <div className={`${selfPrefixCls}-header`}>{title}</div>
          ) : null}

          <div className={`${selfPrefixCls}-body`}>{children}</div>
          {footer ? (
            <div className={`${selfPrefixCls}-footer`}>
              {footer === true ? <DefaultFooter /> : footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  const attach =
    typeof getContainer === 'function' ? getContainer() : getContainer;

  return attach ? createPortal(ModalDOM, attach) : ModalDOM;
};

export default Modal;
