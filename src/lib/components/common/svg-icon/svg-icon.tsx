import React from 'react';
import clsx from 'clsx';

export const styles = {
  base: 'fill-current',
  default: 'text-base',
  variant: {
    primary: 'text-base-primary',
    success: 'text-base-success',
    warn: 'text-base-warn',
    danger: 'text-base-danger',
  },
  white: 'text-white',
  size: {
    xs: 'h4 w-4',
    sm: 'h-5 w-5',
    md: 'h-6 h-6',
    lg: 'h-8 w-8',
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
  /**
   * Changes the font color to white
   */
  white?: boolean;
}

const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  ({ children, viewBox = '0 0 24 24', className, size = 'sm', variant, white, ...props }, ref) => {
    const classes = clsx(
      styles.base,
      styles.size[size],
      white ? styles.white : variant ? styles.variant[variant] : styles.default,
      className,
    );

    return (
      <svg className={classes} ref={ref} viewBox={viewBox} {...props}>
        {children}
      </svg>
    );
  },
);

export default React.memo(SvgIcon);
