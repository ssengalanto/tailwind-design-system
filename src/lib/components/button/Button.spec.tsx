/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { Button, ButtonProps, styles } from './Button';

const mockedProps: ButtonProps = {
  variant: 'primary',
};

const setup = (props: Partial<ButtonProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Button {...setupProps}>Button Label</Button>);
};

describe('<Button />', () => {
  it('should render the button with the correct text', () => {
    setup();
    const button = screen.getByText(/Button Label/i);
    expect(button).toBeInTheDocument();
  });
});

describe('Button props', () => {
  it('props { variant: "primary" }', () => {
    setup({ variant: 'primary' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass(styles.variant.primary);
  });

  it('props { variant: "success" }', () => {
    setup({ variant: 'success' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass(styles.variant.success);
  });

  it('props { variant: "warn" }', () => {
    setup({ variant: 'warn' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass(styles.variant.warn);
  });

  it('props { variant: "danger" }', () => {
    setup({ variant: 'danger' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass(styles.variant.danger);
  });

  it('props { size: "small" }', () => {
    setup({ size: 'small' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass(styles.size.small);
  });

  it('props { size: "medium" }', () => {
    setup({ size: 'medium' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass(styles.size.medium);
  });

  it('props { disabled: true }', () => {
    setup({ disabled: true });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass(styles.disabled);
  });

  it('props { fullWidth: true }', () => {
    setup({ fullWidth: true });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass(styles.fullWidth);
  });
});
