/* eslint-disable no-nested-ternary */
import React from 'react';
import clsx from 'clsx';

import { Label } from '../label';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Defines the error state of the checkbox
   */
  error?: boolean;
  /**
   * Defines the disabled state of the checkbox
   */
  disabled?: boolean;
  /**
   * Defines the required state of the checkbox
   */
  label?: string;
}

export const styles = {
  base: 'rounded bg-transparent shadow-sm focus:ring-1 focus:ring-opacity-50',
  default: 'border-gray-500 text-primary-500 focus:ring-primary-200 focus:border-primary-300',
  error: 'border-red-500 dark:border-red-400 text-red-500 focus:ring-red-200 focus:border-red-300',
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled, label, className, error, ...props }, ref) => {
    const classes = clsx(styles.base, error ? styles.error : styles.default, className);
    return (
      <Label inline label={label} error={error} disabled={disabled}>
        <input className={classes} type="checkbox" ref={ref} disabled={disabled} {...props} />
      </Label>
    );
  },
);
