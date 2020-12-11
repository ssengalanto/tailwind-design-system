import React from 'react';
import clsx from 'clsx';

export const styles = {
  base: 'fill-current',
  variant: {
    default: 'text-base',
    primary: 'text-base-primary',
    inverse: 'text-white',
  },
  size: {
    small: 'h-5 w-5',
    medium: 'h-6 h-6',
    large: 'h-8 w-8',
  },
};

export interface SvgIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  /**
   * Defines the size of the icon
   */
  size?: keyof typeof styles.size;
  /**
   * Defines variant of the icon
   */
  variant?: keyof typeof styles.variant;
}

const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (
    { children, viewBox = '0 0 24 24', className, size = 'small', variant = 'default', ...props },
    ref,
  ) => {
    const classes = clsx(styles.base, styles.size[size], styles.variant[variant], className);

    return (
      <svg className={classes} ref={ref} viewBox={viewBox} {...props}>
        {children}
      </svg>
    );
  },
);

export { SvgIcon };
