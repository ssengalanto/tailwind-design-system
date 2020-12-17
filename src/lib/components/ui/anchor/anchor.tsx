import React from 'react';
import clsx from 'clsx';

export const styles = {
  base: 'transition duration-300 ease-in-out',
  variant: {
    primary: 'text-base-primary hover:text-primary-600 dark:hover:text-primary-300',
    success: 'text-base-success hover:text-green-600 dark:hover:text-green-300',
    warn: 'text-base-warn hover:text-yellow-600 dark:hover:text-yellow-200',
    danger: 'text-base-danger hover:text-red-600 dark:hover:text-red-300',
  },
  underlined: 'underline',
};

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Defines the variant prop of the anchor
   */
  variant?: keyof typeof styles.variant;
  /**
   * Defines the underline prop of the anchor
   */
  underlined?: boolean;
}

// TODO: improve accessibility
export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(function Anchor(
  { className, children, underlined, variant = 'primary', ...props },
  ref,
) {
  const classes = clsx(
    styles.base,
    styles.variant[variant],
    { [styles.underlined]: underlined },
    className,
  );

  return (
    <a className={classes} ref={ref} {...props}>
      {children}
    </a>
  );
});

export default React.memo(Anchor);
