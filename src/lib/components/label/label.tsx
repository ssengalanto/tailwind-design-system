import React from 'react';
import clsx from 'clsx';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /**
   * Displays the label inline
   */
  inline?: boolean;
  /**
   * Defines the disabled state of the label
   */
  disabled?: boolean;
  /**
   * Defines the error state of the label
   */
  error?: boolean;
  /**
   * Defines required state of the label
   */
  required?: boolean;
  /**
   * Defines the text content of the label
   */
  label?: string;
}

export const styles = {
  base: 'block text-sm text-gray-700 dark:text-gray-400',
  inline: 'inline-flex items-center',
  disabled: 'opacity-50 cursor-not-allowed',
  error: 'text-red-500 dark:text-red-400',
};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { children, className, inline, disabled, error, label, required, ...props },
  ref,
) {
  const classes = clsx(
    styles.base,
    { [styles.inline]: inline },
    { [styles.disabled]: disabled },
    { [styles.error]: error },
    className,
  );
  const text = required ? `${label}*` : label;
  return (
    <label className={classes} ref={ref} {...props}>
      {label && !inline ? <span className="block mb-1.5">{text}</span> : null}
      {children}
      {label && inline ? <span className="ml-2">{text}</span> : null}
    </label>
  );
});
