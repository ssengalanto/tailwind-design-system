import clsx from 'clsx';
import React from 'react';

export interface HelperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Defines error state
   */
  error?: boolean;
  /**
   * Defines disabled state
   */
  disabled?: boolean;
}

export const styles = {
  base: 'text-xs text-base',
  error: 'text-base-error',
  disabled: 'opacity-50',
};

const HelperText = React.forwardRef<HTMLSpanElement, HelperTextProps>(function HelperText(
  { className, error, disabled, ...props },
  ref,
) {
  const classes = clsx(
    styles.base,
    { [styles.error]: error },
    { [styles.disabled]: disabled },
    className,
  );
  return <span className={classes} ref={ref} {...props} />;
});

export default React.memo(HelperText);
