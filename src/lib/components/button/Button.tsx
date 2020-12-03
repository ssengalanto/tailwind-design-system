/* eslint-disable react/button-has-type */
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button variants
   */
  variant?: 'primary' | 'success' | 'warn' | 'danger';
  /**
   * The size of the button
   */
  size?: 'small' | 'medium';
  /**
   * Display the button as full width
   */
  fullWidth?: boolean;
}

export const styles = {
  base: 'inline-block rounded-md focus:outline-none focus:ring-2',
  transition: 'transition duration-300 ease-in-out',
  variant: {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    warn: 'bg-yellow-500 text-white hover:bg-yellow-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  },
  size: {
    small: 'py-2 px-6',
    medium: 'py-4 px-8',
  },
  fullWidth: 'w-full',
};

export const Button = React.forwardRef(
  (
    {
      children,
      size = 'medium',
      type = 'button',
      variant = 'primary',
      fullWidth,
      className,
      ...props
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ): JSX.Element => (
    <button
      ref={ref}
      type={type}
      className={clsx(
        styles.base,
        styles.transition,
        { [styles.variant.primary]: variant === 'primary' },
        { [styles.variant.success]: variant === 'success' },
        { [styles.variant.warn]: variant === 'warn' },
        { [styles.variant.danger]: variant === 'danger' },
        { [styles.size.small]: size === 'small' },
        { [styles.size.medium]: size === 'medium' },
        { [styles.fullWidth]: fullWidth },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
