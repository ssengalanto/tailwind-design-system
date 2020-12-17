/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import Menu, { MenuProps } from './menu';
import { MenuItem } from './menu-item';

const mockedProps: MenuProps = {
  children: <MenuItem data-testid="menuitem-component" label="Menu Label" />,
};

const testId = 'menu-component';

const setup = (props: Partial<MenuProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Menu data-testid={testId} {...setupProps} />);
};

describe('<Menu />', () => {
  it('should render without error', () => {
    setup();
    const menu = screen.getByTestId(testId);
    expect(menu).toBeInTheDocument();
  });

  it('should render its children prop', () => {
    setup();
    const menuItem = screen.getByTestId('menuitem-component');
    const menu = screen.getByTestId(testId);
    expect(menu).toContainElement(menuItem);
  });
});
