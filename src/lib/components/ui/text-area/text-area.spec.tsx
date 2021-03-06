/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import TextArea, { TextAreaProps, styles } from './text-area';

const mockedProps: TextAreaProps = {};

const testId = 'input-component';

const setup = (props: Partial<TextAreaProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<TextArea data-testid={testId} {...setupProps} />);
};

describe('<TextArea />', () => {
  it('should render without error', () => {
    setup();
    const textArea = screen.getByTestId(testId);

    expect(textArea).toBeInTheDocument();
  });

  it('props { disabled: true }', () => {
    setup({ disabled: true });
    const textArea = screen.getByTestId(testId);

    expect(textArea).toHaveClass(styles.disabled);
  });

  it('props { error: true }', () => {
    setup({ error: true });
    const textArea = screen.getByTestId(testId);

    expect(textArea).toHaveClass(styles.error);
  });
});
