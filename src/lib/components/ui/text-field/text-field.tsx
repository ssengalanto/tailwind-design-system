/* eslint-disable no-nested-ternary */
import React from 'react';
import clsx from 'clsx';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Defines the error state of the text-field
   */
  error?: boolean;
}

export const styles = {
  base:
    'block w-full prose-sm prose mt-1 rounded-md shadow-sm dark:text-gray-300 focus:ring focus:ring-opacity-50',
  active:
    'dark:bg-gray-700 border-gray-300 dark:border-gray-500 focus:border-primary-300 focus:ring-primary-200 dark:focus:ring-gray-700',
  disabled:
    'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-700 border-gray-400 dark:border-gray-400',
  error: 'border-red-500 dark:bg-gray-700 focus:border-red-400  focus:ring-red-200 f',
};

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ type = 'text', error, disabled, className, required, ...props }, ref) => {
    const classes = clsx(
      styles.base,
      error ? styles.error : disabled ? styles.disabled : styles.active,
      className,
    );
    return (
      <input
        className={classes}
        type={type}
        ref={ref}
        autoComplete="nope"
        disabled={disabled}
        required={required}
        {...props}
      />
    );
  },
);

export default React.memo(TextField);
