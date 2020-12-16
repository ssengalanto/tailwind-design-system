/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import Badge, { BadgeProps, styles } from './badge';

const mockedProps: BadgeProps = {
  variant: 'primary',
};

const setup = (props: Partial<BadgeProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Badge {...setupProps}>Badge Label</Badge>);
};

describe('<Badge />', () => {
  it('should render the button with the correct text', () => {
    setup();
    const button = screen.getByText(/Badge Label/i);
    expect(button).toBeInTheDocument();
  });

  it('props { variant: "primary" }', () => {
    setup({ variant: 'primary' });
    const button = screen.getByText(/Badge Label/i);
    expect(button).toHaveClass(styles.variant.primary);
  });

  it('props { variant: "success" }', () => {
    setup({ variant: 'success' });
    const button = screen.getByText(/Badge Label/i);
    expect(button).toHaveClass(styles.variant.success);
  });

  it('props { variant: "warn" }', () => {
    setup({ variant: 'warn' });
    const button = screen.getByText(/Badge Label/i);
    expect(button).toHaveClass(styles.variant.warn);
  });

  it('props { variant: "danger" }', () => {
    setup({ variant: 'danger' });
    const button = screen.getByText(/Badge Label/i);
    expect(button).toHaveClass(styles.variant.danger);
  });

  it('props { variant: "neutral" }', () => {
    setup({ variant: 'neutral' });
    const button = screen.getByText(/Badge Label/i);
    expect(button).toHaveClass(styles.variant.neutral);
  });
});
