/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/button-has-type */
import React from 'react';
import clsx from 'clsx';
import { SvgIcon } from 'lib/components/common';

export const styles = {
  base:
    'inline-block prose prose-sm rounded-full focus:outline-none focus-visible:ring focus-visible:ring-opacity-50',
  transition: 'transition duration-300 ease-in-out',
  variant: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 ring-primary-200',
    success: 'bg-green-500 text-white hover:bg-green-600 ring-green-200',
    warn: 'bg-yellow-500 text-white hover:bg-yellow-600 ring-yellow-200',
    danger: 'bg-red-500 text-white hover:bg-red-600 ring-red-200',
  },
  disabled: 'bg-gray-200 cursor-not-allowed',
  size: {
    xs: 'p-2',
    sm: 'p-3',
  },
};

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * Defines the variant of the button
   */
  variant?: keyof typeof styles.variant;
  /**
   * Defines the size of the button
   */
  size?: keyof typeof styles.size;
  /**
   * The icon that will be rendered, must use icons created through SvgIcon component
   */
  icon: React.ReactElement<React.ComponentProps<typeof SvgIcon>>;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function Button(
  {
    size = 'xs',
    type = 'button',
    variant = 'primary',
    disabled = false,
    className,
    icon,
    ...props
  },
  ref,
): JSX.Element {
  const classes = clsx(
    styles.base,
    styles.transition,
    styles.size[size],
    disabled ? styles.disabled : styles.variant[variant],
    className,
  );

  return (
    <button ref={ref} type={type} disabled={disabled} className={classes} {...props}>
      {React.cloneElement(icon, {
        size,
        variant: disabled ? 'default' : icon.props.variant,
      })}
    </button>
  );
});

export default React.memo(IconButton);
