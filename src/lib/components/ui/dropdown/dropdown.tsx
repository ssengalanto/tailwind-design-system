import React, { useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import FocusLock from 'react-focus-lock';
import { motion, AnimatePresence } from 'framer-motion';

import { DropdownItem } from './dropdown-item';

export const styles = {
  base:
    'absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700',
  align: {
    left: 'left-0',
    right: 'right-0',
  },
};

export interface DropdownProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * Function executed when the dropdown is closed
   */
  onClose: () => void;
  /**
   * Defines if the dropdown is open
   */
  open: boolean;
  /**
   * Defines the alignement of the dropdown related to its parent
   */
  align?: keyof typeof styles.align;
  /**
   * Defines that the children should be type of DropdownItem
   */
  children:
    | React.ReactElement<React.ComponentProps<typeof DropdownItem>>
    | Array<React.ReactElement<React.ComponentProps<typeof DropdownItem>>>;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(function Dropdown(
  { children, className, open, onClose, align = 'right', ...props },
  ref,
) {
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleEsc = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, { capture: true });
    document.addEventListener('keydown', handleEsc, { capture: true });
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [handleClickOutside, handleEsc, open]);

  const classes = clsx(styles.base, styles.align[align], className);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div ref={ref}>
            <FocusLock returnFocus>
              <ul className={classes} ref={dropdownRef} aria-label="submenu" {...props}>
                {children}
              </ul>
            </FocusLock>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
});

export default React.memo(Dropdown);
