import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

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

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={classes} ref={ref} {...props} />
    </motion.div>
  );
});

export default React.memo(Backdrop);
