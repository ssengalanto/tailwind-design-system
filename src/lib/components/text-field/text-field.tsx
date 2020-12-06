/* eslint-disable no-nested-ternary */
import React from 'react';
import clsx from 'clsx';

import { Label } from '../label';

export interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Defines error state
   */
  error?: boolean;
  /**
   * Defines disabled state
   */
  disabled?: boolean;
  /**
   * Defines required state
   */
  required?: boolean;
  /**
   * Defines the type of the input
   */
  type?: string;
  /**
   * Defines the label of the input
   */
  label?: string;
}

export const styles = {
  base:
    'block w-full p-2 text-sm focus:outline-none dark:text-gray-300 rounded-sm leading-5 border',
  active:
    'focus:border-primary-500 focus:ring-1 dark:ring-gray-400 dark:focus:border-gray-600 dark:bg-gray-700 border-gray-300 dark:border-gray-600',
  disabled:
    'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-700 border-gray-400 dark:border-gray-400',
  error:
    'border-red-500 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 ring-red-300 focus:ring-1',
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ type = 'text', error, disabled, label, className, required, ...props }, ref) => {
    const classes = clsx(
      styles.base,
      error ? styles.error : disabled ? styles.disabled : styles.active,
      className,
    );
    return (
      <Label label={label} required={required} disabled={disabled} error={error}>
        <input
          className={classes}
          type={type}
          ref={ref}
          autoComplete="nope"
          disabled={disabled}
          required={required}
          {...props}
        />
      </Label>
    );
  },
);
