/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import faker from 'faker';
import { screen, render } from '@testing-library/react';

import { Avatar, AvatarProps, styles } from './avatar';

const mockedProps: AvatarProps = {
  src: '',
  alt: '',
};

const setup = (props: Partial<AvatarProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Avatar data-testid="avatar-component" {...setupProps} />);
};

describe('<Avatar />', () => {
  it('should render without error', () => {
    setup();
    const avatar = screen.getByTestId('avatar-component');
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

  it('props { size: "small" }', () => {
    setup({ size: 'small' });
    const avatar = screen.getByTestId('avatar-component');
    expect(avatar).toHaveClass(styles.size.small);
  });

  it('props { size: "medium" }', () => {
    setup({ size: 'medium' });
    const avatar = screen.getByTestId('avatar-component');
    expect(avatar).toHaveClass(styles.size.medium);
  });

  it('props { size: "large" }', () => {
    setup({ size: 'large' });
    const avatar = screen.getByTestId('avatar-component');
    expect(avatar).toHaveClass(styles.size.large);
  });
});
