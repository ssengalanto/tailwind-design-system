/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import { MockComponent, mockComponentTestId } from 'lib/test-utils';

import Dropdown, { DropdownProps, styles } from './dropdown';
import { DropdownItem } from './dropdown-item';

const mockedProps: DropdownProps = {
  onClose: jest.fn(),
  open: true,
  children: (
    <DropdownItem>
      <MockComponent />
    </DropdownItem>
  ),
};

const testId = 'dropdown-component';

const setup = (props: Partial<DropdownProps> = {}) => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Dropdown data-testid={testId} {...setupProps} />);
};

describe('<Dropdown />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render when open props is true', () => {
    setup();
    const dropdown = screen.getByTestId(testId);

    expect(dropdown).toBeInTheDocument();
  });

  it('should render its children prop when open prop is true', () => {
    setup();
    const mockComponent = screen.getByTestId(mockComponentTestId);

    expect(mockComponent).toBeInTheDocument();
  });

  it('should not render when open prop is false', () => {
    setup({ open: false });
    const dropdown = screen.queryByTestId(testId);

    expect(dropdown).not.toBeInTheDocument();
  });

  it('it should call onClose when Esc key is pressed', () => {
    setup();
    const dropdown = screen.getByTestId(testId);

    fireEvent.keyDown(dropdown, { key: 'Esc' });

    expect(mockedProps.onClose).toHaveBeenCalled();
  });

  it('props { align: "left" }', () => {
    setup({ align: 'left' });
    const dropdown = screen.getByTestId(testId);

    expect(dropdown).toHaveClass(styles.align.left);
  });

  it('props { align: "right" }', () => {
    setup({ align: 'right' });
    const dropdown = screen.getByTestId(testId);

    expect(dropdown).toHaveClass(styles.align.right);
  });
});
