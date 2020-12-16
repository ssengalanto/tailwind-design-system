import React from 'react';
import clsx from 'clsx';

export const styles = {
  base: 'inline-flex px-1 text-xs font-medium leading-5 rounded-sm',
  variant: {
    success: 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
    danger: 'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700',
    warn: 'text-yellow-700 bg-yellow-100 dark:text-white dark:bg-yellow-600',
    neutral: 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700',
    primary: 'text-primary-700 bg-primary-100 dark:text-white dark:bg-primary-600',
  },
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Defines the variant of the badge
   */
  variant?: keyof typeof styles.variant;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, children, variant = 'primary', ...props },
  ref,
) {
  const classes = clsx(styles.base, styles.variant[variant], className);

  return (
    <span className={classes} ref={ref} {...props}>
      {children}
    </span>
  );
});

export default React.memo(Badge);
