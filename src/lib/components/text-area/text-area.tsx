/* eslint-disable no-nested-ternary */
import React from 'react';
import clsx from 'clsx';

import { Label } from '../label';
import { HelperText } from '../helper-text';

export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  /**
   * Defines the number of rows for textarea
   */
  rows?: number;
  /**
   * Defines the error state of the textarea
   */
  error?: boolean;
  /**
   * Defines the disabled state of the textarea
   */
  disabled?: boolean;
  /**
   * Defines the required state of the textarea
   */
  required?: boolean;
  /**
   * Defines the label of the textarea
   */
  label?: string;
  /**
   * Defines the helper text of the textarea
   */
  helperText?: string;
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

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, disabled, label, className, required, helperText, rows = 3, ...props }, ref) => {
    const classes = clsx(
      styles.base,
      error ? styles.error : disabled ? styles.disabled : styles.active,
      className,
    );
    return (
      <Label label={label} required={required} disabled={disabled} error={error}>
        <textarea
          className={classes}
          ref={ref}
          rows={rows}
          autoComplete="nope"
          disabled={disabled}
          required={required}
          {...props}
        />
        {helperText ? <HelperText error={error}>{helperText}</HelperText> : null}
      </Label>
    );
  },
);
