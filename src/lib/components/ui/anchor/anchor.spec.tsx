/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import Anchor, { AnchorProps, styles } from './anchor';

const mockedProps: AnchorProps = {
  variant: 'primary',
};

const setup = (props: Partial<AnchorProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Anchor {...setupProps}>Anchor Label</Anchor>);
};

describe('<Anchor />', () => {
  it('should render the button with the correct text', () => {
    setup();
    const button = screen.getByText(/Anchor Label/i);
    expect(button).toBeInTheDocument();
  });

  it('props { variant: "primary" }', () => {
    setup({ variant: 'primary' });
    const button = screen.getByText(/Anchor Label/i);
    expect(button).toHaveClass(styles.variant.primary);
  });

  it('props { variant: "success" }', () => {
    setup({ variant: 'success' });
    const button = screen.getByText(/Anchor Label/i);
    expect(button).toHaveClass(styles.variant.success);
  });

  it('props { variant: "warn" }', () => {
    setup({ variant: 'warn' });
    const button = screen.getByText(/Anchor Label/i);
    expect(button).toHaveClass(styles.variant.warn);
  });

  it('props { variant: "danger" }', () => {
    setup({ variant: 'danger' });
    const button = screen.getByText(/Anchor Label/i);
    expect(button).toHaveClass(styles.variant.danger);
  });

  it('props { underlined: true }', () => {
    setup({ underlined: true });
    const button = screen.getByText(/Anchor Label/i);
    expect(button).toHaveClass(styles.underlined);
  });
});
