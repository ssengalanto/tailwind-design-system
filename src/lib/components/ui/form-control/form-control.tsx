import React from 'react';

import { Label } from '../label';
import { HelperText } from '../helper-text';

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Defines the error state of the text-field
   */
  error?: boolean;
  /**
   * Defines the disabled state of the text-field
   */
  disabled?: boolean;
  /**
   * Defines the required state of the text-field
   */
  required?: boolean;
  /**
   * Defines the label of the text-field
   */
  label?: string;
  /**
   * Defines the helper text of the text-field
   */
  helperText?: string;
}

const FormControl = React.forwardRef<HTMLInputElement, FormControlProps>(
  ({ error, disabled, label, children, required, helperText, ...props }, ref) => (
    <div ref={ref} {...props}>
      <Label label={label} required={required} disabled={disabled} error={error}>
        {children}
        {helperText ? <HelperText error={error}>{helperText}</HelperText> : null}
      </Label>
    </div>
  ),
);

export default React.memo(FormControl);
