/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import faker from 'faker';
import { screen, render } from '@testing-library/react';

import Checkbox, { CheckboxProps, styles } from './checkbox';

const mockedProps: CheckboxProps = {};

const testId = 'checkbox-component';

const setup = (props: Partial<CheckboxProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Checkbox data-testid={testId} {...setupProps} />);
};

describe('<Checkbox />', () => {
  it('should render without error', () => {
    setup();
    const checkbox = screen.getByTestId(testId);

    expect(checkbox).toHaveClass(styles.default);
    expect(checkbox).toBeInTheDocument();
  });

  it('should render the label prop when provided', () => {
    const text = faker.random.word();
    setup({ label: text });
    const label = screen.getByText(text);

    expect(label).toBeInTheDocument();
  });

  it('props { error: true }', () => {
    setup({ error: true });
    const checkbox = screen.getByTestId(testId);

    expect(checkbox).toHaveClass(styles.error);
  });
});
