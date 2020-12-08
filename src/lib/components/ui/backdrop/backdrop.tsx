import React from 'react';
import clsx from 'clsx';

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {}

export const styles = {
  base:
    'fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center',
};

export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(
  { className, ...props },
  ref,
): JSX.Element {
  const classes = clsx(styles.base, className);

  return <div className={classes} ref={ref} {...props} />;
});
