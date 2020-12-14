/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render } from '@testing-library/react';

import { MockComponent, mockComponentTestId } from 'lib/test-utils';

import Modal, { ModalProps } from './modal';

const mockedProps: ModalProps = {
  open: false,
  onClose: jest.fn(),
};

const setup = (props: Partial<ModalProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(
    <Modal {...setupProps}>
      <MockComponent />
    </Modal>,
  );
};

describe('<Modal />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('props { open: true }', () => {
    setup({ open: true });
    const modal = screen.getByRole('dialog');
    const mockComponent = screen.getByTestId(mockComponentTestId);

    expect(modal).toBeInTheDocument();
    expect(modal).toContainElement(mockComponent);
  });

  it('props { open: false }', () => {
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });
});
