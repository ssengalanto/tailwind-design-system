/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Portal from '@reach/portal';
import FocusLock from 'react-focus-lock';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { motion, AnimatePresence } from 'framer-motion';

import { Backdrop } from '../backdrop';
import { Card, CardProps } from '../card';

export const styles = {
  base: 'min-w-0 bg-white p-5 rounded-lg shadow-md',
  default: 'bg-white dark:bg-gray-800',
};

export interface ModalProps extends CardProps {
  /**
   * A function prop to close the modal when backdrop or close button is clicked
   */
  onClose: () => void;
  /**
   * Defines if the modal is open
   */
  open: boolean;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { onClose, open, children, className, ...props },
  ref,
) {
  const backdropRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const classes = clsx(styles.base, styles.default, className);

  const handleEsc: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (backdropRef.current) {
      if (open) {
        disableBodyScroll(backdropRef.current);
      } else {
        enableBodyScroll(backdropRef.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  return (
    <Portal>
      <AnimatePresence>
        {open ? (
          <Backdrop ref={backdropRef} onClick={onClose} onKeyDown={handleEsc}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <Card
                role="dialog"
                onClick={(e) => e.stopPropagation()}
                className={classes}
                ref={ref}
                {...props}
              >
                <FocusLock returnFocus>{children}</FocusLock>
              </Card>
            </motion.div>
          </Backdrop>
        ) : null}
      </AnimatePresence>
    </Portal>
  );
});
