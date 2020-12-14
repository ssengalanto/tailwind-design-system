/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import faker from 'faker';
import { screen, render } from '@testing-library/react';

import HelperText, { HelperTextProps, styles } from './helper-text';

const mockedProps: HelperTextProps = {};

const testId = 'helper-component';

const setup = (props: Partial<HelperTextProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<HelperText data-testid={testId} {...setupProps} />);
};

describe('<HelperText />', () => {
  it('should render without error', () => {
    setup();
    const helperText = screen.getByTestId(testId);

    expect(helperText).toBeInTheDocument();
  });

  it('should render its children prop', () => {
    const children = faker.random.word();
    setup({ children });
    const helperText = screen.getByText(children);

    expect(helperText).toBeInTheDocument();
  });

  it('props { disabled: true }', () => {
    setup({ disabled: true });
    const helperText = screen.getByTestId(testId);

    expect(helperText).toHaveClass(styles.disabled);
  });

  it('props { error: true }', () => {
    setup({ error: true });
    const helperText = screen.getByTestId(testId);

    expect(helperText).toHaveClass(styles.error);
  });
});
