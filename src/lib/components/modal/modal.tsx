import React, { useEffect, useRef } from 'react';
import Portal from '@reach/portal';
import FocusLock from 'react-focus-lock';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { Backdrop } from '../backdrop';
import { Card } from '../card';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
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
  { onClose, open, children, ...props },
  ref,
) {
  const backdropRef = useRef() as React.MutableRefObject<HTMLDivElement>;

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
      {open ? (
        <Backdrop ref={backdropRef} onClick={onClose}>
          <Card role="dialog" ref={ref} onClick={(e) => e.stopPropagation()} {...props}>
            <FocusLock returnFocus>
              <header className="flex justify-end">
                {/* TODO: replace svg with standard icons */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
                  aria-label="close"
                  onClick={onClose}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </header>
              {children}
            </FocusLock>
          </Card>
        </Backdrop>
      ) : null}
    </Portal>
  );
});
