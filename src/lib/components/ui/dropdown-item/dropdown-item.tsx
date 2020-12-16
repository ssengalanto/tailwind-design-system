import React from 'react';
import clsx from 'clsx';

export const styles = {
  base:
    'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 focus:outline-none focus:bg-gray-100 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200',
  list: 'm-1',
};

export interface DropdownItemProps extends React.HTMLAttributes<HTMLButtonElement> {}

const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(function DropdownItem(
  { className, children, ...props },
  ref,
) {
  const classes = clsx(styles.base, className);

  return (
    <li className={styles.list}>
      <button className={classes} type="button" ref={ref} {...props}>
        {children}
      </button>
    </li>
  );
});

export default DropdownItem;
