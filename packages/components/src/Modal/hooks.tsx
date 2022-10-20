import { useEffect, useRef } from 'react';

import type { ModalProps } from './type';

export const useModal = (props: ModalProps) => {
  const {
    open,
    keyboard = true,

    onCancel,
    onOk
  } = props;

  // doto auto focus for handleKeyDown
  const modalRef = useRef<HTMLDivElement>();

  useEffect(() => {
    modalRef.current.style.display = open ? 'block' : 'none';
  }, [open]);

  /** 键盘 esc 关闭 */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!keyboard) return;
    if (e.key === 'Escape') {
      e.stopPropagation();
      onCancel?.();
    }
  };

  /** modal 关闭 */
  const handleClose = () => {
    onCancel?.();
  };

  /** modal 确定 */
  const handleOk = () => {
    onOk?.();
  };

  return {
    modalRef,
    handleKeyDown,
    handleClose,
    handleOk
  };
};
