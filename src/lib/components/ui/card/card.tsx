import React from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const styles = {
  base: 'min-w-0 bg-white p-5 rounded-lg shadow-md',
  default: 'bg-white dark:bg-gray-800',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, ...props },
  ref,
) {
  const classes = clsx(styles.base, styles.default, className);

  return <div className={classes} ref={ref} {...props} />;
});
