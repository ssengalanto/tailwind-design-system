/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { MockComponent, mockComponentTestId } from 'lib/test-utils';

import Card, { CardProps } from './card';

const mockedProps: CardProps = {};

const testId = 'card-component';

const setup = (props: Partial<CardProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(
    <Card data-testid={testId} {...setupProps}>
      <MockComponent />
    </Card>,
  );
};

describe('<Card />', () => {
  it('should render without error', () => {
    setup();
    const card = screen.getByTestId(testId);
    expect(card).toBeInTheDocument();
  });

  it('should render its children prop', () => {
    setup();
    const mockComponent = screen.getByTestId(mockComponentTestId);
    const card = screen.getByTestId(testId);
    expect(card).toContainElement(mockComponent);
  });
});
