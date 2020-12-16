/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import Skeleton, { SkeletonProps, styles } from './skeleton';

const mockedProps: SkeletonProps = {};

const testId = 'skeleton-component';

const setup = (props: Partial<SkeletonProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Skeleton data-testid={testId} {...setupProps} />);
};

describe('<Skeleton />', () => {
  it('should render without error', () => {
    setup();
    const skeleton = screen.getByTestId(testId);
    expect(skeleton).toBeInTheDocument();
  });

  it('props { variant: "circle" }', () => {
    setup({ variant: 'circle' });
    const skeleton = screen.getByTestId(testId);
    expect(skeleton).toHaveClass(styles.variant.circle.base);
  });

  it('props { variant: "text" }', () => {
    setup({ variant: 'text' });
    const skeleton = screen.getByTestId(testId);
    expect(skeleton).toHaveClass(styles.variant.text.base);
  });

  // TODO: test the size props
});
