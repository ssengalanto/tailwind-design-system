/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import faker from 'faker';
import { screen, render } from '@testing-library/react';

import { TextField, TextFieldProps, styles } from './text-field';

const mockedProps: TextFieldProps = {};

const testId = 'input-component';

const setup = (props: Partial<TextFieldProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<TextField data-testid={testId} {...setupProps} />);
};

describe('<TextField />', () => {
  it('should render without error', () => {
    setup();
    const textField = screen.getByTestId(testId);

    expect(textField).toBeInTheDocument();
  });

  it('should render the label prop when provided', () => {
    const text = faker.random.word();
    setup({ label: text });
    const textField = screen.getByText(text);

    expect(textField).toBeInTheDocument();
  });

  it('props { disabled: true }', () => {
    setup({ disabled: true });
    const textField = screen.getByTestId(testId);

    expect(textField).toHaveClass(styles.disabled);
  });

  it('props { error: true }', () => {
    setup({ error: true });
    const textField = screen.getByTestId(testId);

    expect(textField).toHaveClass(styles.error);
  });

  it('props { required: true }', () => {
    const text = faker.random.word();
    setup({ required: true, label: text });
    const textField = screen.getByText(`${text}*`);

    expect(textField).toBeInTheDocument();
  });
});
