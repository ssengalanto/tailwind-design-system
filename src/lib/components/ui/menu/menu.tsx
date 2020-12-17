import React from 'react';
import { MenuItem } from './menu-item/menu-item';

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * Defines the Title of the Menu
   */
  title?: string;
  /**
   * Defines that the children should be type of Menu
   */
  children:
    | React.ReactElement<React.ComponentProps<typeof MenuItem>>
    | Array<React.ReactElement<React.ComponentProps<typeof MenuItem>>>;
}

export const styles = {
  title: 'mb-2 font-medium text-base-primary',
};

export const Menu = React.forwardRef<HTMLUListElement, MenuProps>(function Menu(
  { className, children, title, ...props },
  ref,
) {
  return (
    <nav className={className}>
      {title ? <p className={styles.title}>{title}</p> : null}
      <ul ref={ref} {...props}>
        {children}
      </ul>
    </nav>
  );
});

export default React.memo(Menu);
