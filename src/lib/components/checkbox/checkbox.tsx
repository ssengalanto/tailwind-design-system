/* eslint-disable no-nested-ternary */
import React from 'react';
import clsx from 'clsx';

import { Label } from '../label';
import { HelperText } from '../helper-text';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Defines the error state of the text-field
   */
  error?: boolean;
  /**
   * Defines the disabled state of the text-field
   */
  disabled?: boolean;
  /**
   * Defines the required state of the text-field
   */
  label?: string;
  /**
   * Defines the helper text of the text-field
   */
  helperText?: string;
}

export const styles = {
  base:
    'rounded bg-transparent border-gray-500 text-primary-500 shadow-sm focus:border-primary-300 focus:ring-1 focus:ring-primary-200 focus:ring-opacity-50',
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ error, disabled, label, className, helperText, ...props }, ref) => {
    const classes = clsx(styles.base, className);
    return (
      <Label inline label={label} disabled={disabled} error={error}>
        <input className={classes} type="checkbox" ref={ref} disabled={disabled} {...props} />
        {helperText ? <HelperText error={error}>{helperText}</HelperText> : null}
      </Label>
    );
  },
);
