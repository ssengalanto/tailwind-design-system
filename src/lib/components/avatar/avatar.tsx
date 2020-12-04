import React from 'react';
import clsx from 'clsx';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the avatar
   */
  size?: 'large' | 'medium' | 'small';
  /**
   * Alternative text for the avatar image
   */
  alt?: string;
  /**
   * The source for the avatar image
   */
  src: string;
}

export const styles = {
  base: 'relative rounded-full inline-block',
  size: {
    large: 'w-28 h-28',
    medium: 'w-20 h-20',
    small: 'w-8 h-8',
  },
};

export const Avatar = React.forwardRef(function Avatar(
  { src, alt, size = 'medium', ...props }: AvatarProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const classes = clsx(styles.base, styles.size[size]);

  return (
    <div className={classes} ref={ref} {...props}>
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
    </div>
  );
});
