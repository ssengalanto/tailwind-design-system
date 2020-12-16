import React from 'react';
import clsx from 'clsx';

export const styles = {
  base: 'relative rounded-full inline-block',
  size: {
    sm: 'w-8 h-8',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
  },
};

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Defines the size of the avatar
   */
  size?: keyof typeof styles.size;
  /**
   * Defines the alt text of the img
   */
  alt?: string;
  /**
   * Defines the src of the img
   */
  src: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { className, src, alt, size = 'md', ...props },
  ref,
) {
  const classes = clsx(styles.base, styles.size[size], className);

  return (
    <div className={classes} ref={ref} {...props}>
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
    </div>
  );
});

export default React.memo(Avatar);
