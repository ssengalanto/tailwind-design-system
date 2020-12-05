import React from 'react';
import clsx from 'clsx';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /**
   * Displays the label inline
   */
  inline?: boolean;
  /**
   * Defines if the label is disabled
   */
  disabled?: boolean;
}

export const styles = {
  base: 'block text-sm text-gray-700 dark:text-gray-400',
  inline: 'inline-flex items-center',
  disabled: 'opacity-50 cursor-not-allowed',
};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { children, className, inline, disabled, ...props },
  ref,
) {
  const classes = clsx(
    styles.base,
    { [styles.inline]: inline },
    { [styles.disabled]: disabled },
    className,
  );
  return (
    <label className={classes} ref={ref} {...props}>
      {children}
    </label>
  );
});
