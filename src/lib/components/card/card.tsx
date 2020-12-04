import React from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const styles = {
  base: 'min-w-0 bg-white rounded-lg shadow-md',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, ...props },
  ref,
) {
  const classes = clsx(styles.base, className);

  return <div className={classes} ref={ref} {...props} />;
});
