/* eslint-disable react/button-has-type */
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Defines the variant of the button
   */
  variant?: 'primary' | 'success' | 'warn' | 'danger';
  /**
   * Defines the size of the button
   */
  size?: 'small' | 'medium';
  /**
   * Display the button as full width
   */
  fullWidth?: boolean;
}

export const styles = {
  base:
    'inline-block prose prose-sm rounded-md focus:outline-none focus:ring focus:ring-opacity-50',
  transition: 'transition duration-300 ease-in-out',
  variant: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 ring-primary-200',
    success: 'bg-green-500 text-white hover:bg-green-600 ring-green-200',
    warn: 'bg-yellow-500 text-white hover:bg-yellow-600 ring-yellow-200',
    danger: 'bg-red-500 text-white hover:bg-red-600 ring-red-200',
  },
  disabled: 'bg-gray-200 cursor-not-allowed',
  size: {
    small: 'py-2 px-6',
    medium: 'py-4 px-8',
  },
  fullWidth: 'w-full',
};

export const Button = React.forwardRef(function Button(
  {
    children,
    size = 'medium',
    type = 'button',
    variant = 'primary',
    disabled = false,
    fullWidth,
    className,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
): JSX.Element {
  const classes = clsx(
    styles.base,
    styles.transition,
    styles.size[size],
    disabled ? styles.disabled : styles.variant[variant],
    { [styles.fullWidth]: fullWidth },
    className,
  );

  return (
    <button ref={ref} type={type} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  );
});
