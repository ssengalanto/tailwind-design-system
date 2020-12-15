/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { renderHook, act } from '@testing-library/react-hooks';

import { useToggle } from './use-toggle';

const setup = () => renderHook(() => useToggle());

describe('useToggle', () => {
  it('should render default state', () => {
    const { result } = setup();
    expect(result.current.models.open).toBe(false);
  });

  it('should update the state to true when handleOpen is called', () => {
    const { result } = setup();

    act(() => {
      result.current.operations.handleOpen();
    });
    expect(result.current.models.open).toBe(true);
  });

  it('should update the state to false when handleClose is called', () => {
    const { result } = setup();

    act(() => {
      result.current.operations.handleClose();
    });
    expect(result.current.models.open).toBe(false);
  });

  it('should toggle the state from false to true or true to false when handleToggle is called', () => {
    const { result, rerender } = setup();

    act(() => {
      result.current.operations.handleToggle();
    });
    expect(result.current.models.open).toBe(true);

    rerender();

    act(() => {
      result.current.operations.handleToggle();
    });
    expect(result.current.models.open).toBe(false);
  });
});
