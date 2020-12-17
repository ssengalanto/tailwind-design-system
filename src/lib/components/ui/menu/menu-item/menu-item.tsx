import React from 'react';
import clsx from 'clsx';

import { SvgIcon } from 'lib/components/common';

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Defines the active state of the menu item
   */
  active?: boolean;
  /**
   * Defines the label of the menu item
   */
  label: string;
  /**
   * The icon that will be rendered, must use icons created through menu item component
   */
  icon?: React.ReactElement<React.ComponentProps<typeof SvgIcon>>;
}

export const styles = {
  base: 'text-sm my-2 w-full p-4 flex items-center rounded-lg',
  hover: 'hover:bg-primary-100 dark:hover:bg-primary-500 dark:hover:text-white',
  focus:
    'focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-500 dark:focus:text-white focus:outline-none focus-visible:ring focus-visible:ring-opacity-50 ring-primary-100',
  transition: 'transition duration-300 ease-in-out',
  active: 'bg-primary-100 dark:bg-primary-500',
};

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(function MenuItem(
  { className, icon, label, active, ...props },
  ref,
) {
  const textColor = active ? 'text-primary-500 dark:text-white' : 'text-base-default';
  const classes = clsx(
    styles.base,
    styles.hover,
    styles.focus,
    styles.transition,
    textColor,
    { [styles.active]: active },
    className,
  );

  return (
    <li>
      <button className={classes} type="button" ref={ref} {...props}>
        {icon ? React.cloneElement(icon, { variant: 'inherit' }) : null}
        <p
          className={clsx({
            'ml-3': !!icon,
          })}
        >
          {label}
        </p>
      </button>
    </li>
  );
});

export default React.memo(MenuItem);
