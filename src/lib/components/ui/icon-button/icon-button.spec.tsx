/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { Search } from 'lib/components/icons';
import { styles as svgIconStyles } from 'lib/components/common/svg-icon/svg-icon';

import IconButton, { IconButtonProps, styles } from './icon-button';

const mockedProps: IconButtonProps = {
  variant: 'primary',
  icon: <Search data-testid="search-icon" />,
};

const setup = (props: Partial<IconButtonProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<IconButton {...setupProps} />);
};

describe('<IconButton />', () => {
  it('should render the button with the correct text', () => {
    setup();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('props { variant: "primary" }', () => {
    setup({ variant: 'primary' });
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.variant.primary);
  });

  it('props { variant: "success" }', () => {
    setup({ variant: 'success' });
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.variant.success);
  });

  it('props { variant: "warn" }', () => {
    setup({ variant: 'warn' });
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.variant.warn);
  });

  it('props { variant: "danger" }', () => {
    setup({ variant: 'danger' });
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.variant.danger);
  });

  it('props { size: "xs" }', () => {
    setup({ size: 'xs' });
    const icon = screen.getByTestId('search-icon');
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.size.xs);
    expect(icon).toHaveClass(svgIconStyles.size.xs);
  });

  it('props { size: "sm" }', () => {
    setup({ size: 'sm' });
    const icon = screen.getByTestId('search-icon');
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.size.sm);
    expect(icon).toHaveClass(svgIconStyles.size.sm);
  });

  it('props { disabled: true }', () => {
    setup({ disabled: true });
    const icon = screen.getByTestId('search-icon');
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.disabled);
    expect(icon).toHaveClass(svgIconStyles.variant.default);
  });
});
