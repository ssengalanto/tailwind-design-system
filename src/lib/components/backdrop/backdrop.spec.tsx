/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { Backdrop, BackdropProps } from './backdrop';

const mockedProps: BackdropProps = {};

const testId = 'backdrop-component';

const setup = (props: Partial<BackdropProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Backdrop data-testid={testId} {...setupProps} />);
};

describe('<Backdrop />', () => {
  it('should render without error', () => {
    setup();
    const backdrop = screen.getByTestId(testId);
    expect(backdrop).toBeInTheDocument();
  });
});
