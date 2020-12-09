/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import faker from 'faker';
import { screen, render } from '@testing-library/react';

import { FormControl, FormControlProps } from './form-control';
import { TextField } from '../text-field';

const mockedProps: FormControlProps = {};

const testId = 'form-control-component';

const setup = (props: Partial<FormControlProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(
    <FormControl data-testid={testId} {...setupProps}>
      <TextField />
    </FormControl>,
  );
};

describe('<FormControl />', () => {
  it('should render without error', () => {
    setup();
    const textField = screen.getByTestId(testId);

    expect(textField).toBeInTheDocument();
  });

  it('should render its children prop', () => {
    const text = faker.random.word();
    setup({ label: text });
    const textField = screen.getByRole('textbox', { name: text });

    expect(textField).toBeInTheDocument();
  });

  it('should render <Label /> when provided a label prop', () => {
    const text = faker.random.word();
    setup({ label: text });
    const label = screen.getByText(text);

    expect(label).toBeInTheDocument();
  });

  it('should render <HelperText /> when provided a helperText prop', () => {
    const text = faker.random.word();
    setup({ helperText: text });
    const helperText = screen.getByText(text);

    expect(helperText).toBeInTheDocument();
  });

  it('props { required: true } with label', () => {
    const text = faker.random.word();
    setup({ required: true, label: text });
    const textField = screen.getByText(`${text}*`);

    expect(textField).toBeInTheDocument();
  });
});
