/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { MockComponent, mockComponentTestId } from 'lib/test-utils';

import ShowIf, { ShowIfProps } from './show-if';

const mockedProps: ShowIfProps = {
  condition: false,
};

const setup = (props: Partial<ShowIfProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(
    <ShowIf {...setupProps}>
      <MockComponent />
    </ShowIf>,
  );
};

describe('<ShowIf />', () => {
  it('it should render its children prop when condition is true', () => {
    setup({ condition: true });
    const mockComponent = screen.getByTestId(mockComponentTestId);

    expect(mockComponent).toBeInTheDocument();
  });

  it('should return null when condition is false and does not have a fallback', () => {
    const fallback = <div>fallback</div>;
    setup({ fallback });
    const fallbackComponent = screen.getByText('fallback');

    expect(fallbackComponent).toBeInTheDocument();
  });

  it('should return null when condition is false and does not have a fallback', () => {
    setup();
    const mockComponent = screen.queryByTestId(mockComponentTestId);

    expect(mockComponent).not.toBeInTheDocument();
  });
});
