/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useCallback } from 'react';

export type UseToggleType = ReturnType<typeof useToggle>;

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((current) => !current);
  }, []);

  return {
    models: { open },
    operations: {
      handleOpen,
      handleClose,
      handleToggle,
    },
  };
};
