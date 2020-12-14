/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import faker from 'faker';
import { screen, render } from '@testing-library/react';

import Avatar, { AvatarProps, styles } from './avatar';

const mockedProps: AvatarProps = {
  src: '',
  alt: '',
};

const testId = 'avatar-component';

const setup = (props: Partial<AvatarProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Avatar data-testid={testId} {...setupProps} />);
};

describe('<Avatar />', () => {
  it('should render without error', () => {
    setup();
    const avatar = screen.getByTestId(testId);
    expect(avatar).toBeInTheDocument();
  });

  it('should set alt prop to the <img />', () => {
    const alt = faker.random.words();
    setup({ alt });

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', alt);
  });

  it('should set src prop to the <img />', () => {
    const src = faker.image.imageUrl();
    setup({ src });

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', src);
  });

  it('props { size: "sm" }', () => {
    setup({ size: 'sm' });
    const avatar = screen.getByTestId(testId);
    expect(avatar).toHaveClass(styles.size.sm);
  });

  it('props { size: "md" }', () => {
    setup({ size: 'md' });
    const avatar = screen.getByTestId(testId);
    expect(avatar).toHaveClass(styles.size.md);
  });

  it('props { size: "lg" }', () => {
    setup({ size: 'lg' });
    const avatar = screen.getByTestId(testId);
    expect(avatar).toHaveClass(styles.size.lg);
  });
});
