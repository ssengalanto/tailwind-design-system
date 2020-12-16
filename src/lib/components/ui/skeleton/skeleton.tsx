import React from 'react';
import clsx from 'clsx';

export const styles = {
  base: 'bg-gray-200 animate-pulse',

  variant: {
    text: {
      base: 'rounded-sm',
      size: {
        xs: 'h-2.5',
        sm: 'h-3',
        md: 'h-4',
        lg: 'h-5',
      },
    },
    circle: {
      base: 'rounded-full',
      size: {
        xs: 'w-6 h-6',
        sm: 'w-8 h-8',
        md: 'w-20 h-20',
        lg: 'w-28 h-28',
      },
    },
  },
};

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Defines the variant of the skeleton
   */
  variant?: keyof typeof styles.variant;
  /**
   * Defines the size of the skeleton
   */
  size?: keyof typeof styles.variant.circle.size;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { className, variant = 'text', size = 'sm', ...props },
  ref,
) {
  const classes = clsx(
    styles.base,
    styles.variant[variant].base,
    styles.variant[variant].size[size],
    className,
  );

  return <div className={classes} ref={ref} {...props} />;
});

export default React.memo(Skeleton);
