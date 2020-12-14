/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import faker from 'faker';
import { screen, render } from '@testing-library/react';

import { MockComponent, mockComponentTestId } from 'lib/test-utils';

import Accordion, { AccordionProps } from './accordion';

const mockedProps: AccordionProps = {
  i: faker.random.number(),
  expanded: false,
  onExpand: jest.fn(),
};

const testId = 'accordion-component';

const setup = (props: Partial<AccordionProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(
    <Accordion data-testid={testId} {...setupProps}>
      <MockComponent />
    </Accordion>,
  );
};

describe('<Accordion />', () => {
  it('should render without error', () => {
    setup();
    const accordion = screen.getByTestId(testId);
    expect(accordion).toBeInTheDocument();
  });

  it('should render children props when expanded prop is true', () => {
    const num = faker.random.number();
    setup({ i: num, expanded: num });
    const mockComponent = screen.getByTestId(mockComponentTestId);

    expect(mockComponent).toBeInTheDocument();
  });

  it('should not render children props when expanded prop is false', () => {
    setup();
    const mockComponent = screen.queryByTestId(mockComponentTestId);

    expect(mockComponent).not.toBeInTheDocument();
  });
});
