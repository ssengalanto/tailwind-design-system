/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { SvgIcon, SvgIconProps, styles } from './svg-icon';

const mockedProps: SvgIconProps = {
  children: (
    <path
      data-testid="svg-path-test-id"
      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
    />
  ),
};

const testId = 'svg-icon-component';

const setup = (props: Partial<SvgIconProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<SvgIcon data-testid={testId} {...setupProps} />);
};

describe('<SvgIcon />', () => {
  it('it should render without error', () => {
    setup();
    const svg = screen.getByTestId(testId);

    expect(svg).toBeInTheDocument();
  });

  it('it should render its children prop', () => {
    setup();
    const svgPath = screen.getByTestId('svg-path-test-id');

    expect(svgPath).toBeInTheDocument();
  });

  it('props { variant: "default" }', () => {
    setup({ variant: 'default' });
    const svg = screen.getByTestId(testId);

    expect(svg).toHaveClass(styles.variant.default);
  });

  it('props { variant: "primary" }', () => {
    setup({ variant: 'primary' });
    const svg = screen.getByTestId(testId);

    expect(svg).toHaveClass(styles.variant.primary);
  });

  it('props { variant: "inverse" }', () => {
    setup({ variant: 'inverse' });
    const svg = screen.getByTestId(testId);

    expect(svg).toHaveClass(styles.variant.inverse);
  });

  it('props { size: "small" }', () => {
    setup({ size: 'small' });
    const svg = screen.getByTestId(testId);

    expect(svg).toHaveClass(styles.size.small);
  });

  it('props { size: "medium" }', () => {
    setup({ size: 'medium' });
    const svg = screen.getByTestId(testId);

    expect(svg).toHaveClass(styles.size.medium);
  });

  it('props { size: "large" }', () => {
    setup({ size: 'large' });
    const svg = screen.getByTestId(testId);

    expect(svg).toHaveClass(styles.size.large);
  });
});
