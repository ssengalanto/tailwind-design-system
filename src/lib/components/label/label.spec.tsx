/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import faker from 'faker';
import { screen, render } from '@testing-library/react';

import { Label, LabelProps, styles } from './label';

const mockedProps: LabelProps = {
  label: 'Label',
};

const testId = 'label-component';

const setup = (props: Partial<LabelProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(
    <Label data-testid={testId} {...setupProps}>
      <input />
    </Label>,
  );
};

describe('<Label />', () => {
  it('should render without error', () => {
    setup();
    const label = screen.getByTestId(testId);

    expect(label).toBeInTheDocument();
  });

  it('should render its children prop', () => {
    setup();
    const input = screen.getByRole('textbox');
    const label = screen.getByTestId(testId);

    expect(label).toContainElement(input);
  });

  it('should render the label prop when provided', () => {
    const text = faker.random.word();
    setup({ label: text });
    const label = screen.getByText(text);

    expect(label).toBeInTheDocument();
  });

  it('props { disabled: true }', () => {
    setup({ disabled: true });
    const label = screen.getByTestId(testId);

    expect(label).toHaveClass(styles.disabled);
  });

  it('props { inline: true }', () => {
    setup({ inline: true });
    const label = screen.getByTestId(testId);

    expect(label).toHaveClass(styles.inline);
  });

  it('props { error: true }', () => {
    setup({ error: true });
    const label = screen.getByTestId(testId);

    expect(label).toHaveClass(styles.error);
  });

  it('props { required: true }', () => {
    const text = faker.random.word();
    setup({ required: true, label: text });
    const label = screen.getByText(`${text}*`);

    expect(label).toBeInTheDocument();
  });
});
