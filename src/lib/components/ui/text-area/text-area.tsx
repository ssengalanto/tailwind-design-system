import React from 'react';
import clsx from 'clsx';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Defines the error state of the textarea
   */
  error?: boolean;
}

export const styles = {
  base:
    'block w-full prose-sm prose mt-1 rounded-md shadow-sm dark:text-gray-300 focus:ring focus:ring-opacity-50',
  active:
    'dark:bg-gray-700 border-gray-300 dark:border-gray-500 focus:border-primary-300 focus:ring-primary-200 dark:focus:ring-gray-700',
  disabled:
    'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-700 border-gray-400 dark:border-gray-400',
  error: 'border-red-500 dark:bg-gray-700 focus:border-red-400  focus:ring-red-200 f',
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, disabled, className, required, rows = 3, ...props }, ref) => {
    const classes = clsx(
      styles.base,
      error ? styles.error : disabled ? styles.disabled : styles.active,
      className,
    );
    return (
      <textarea
        className={classes}
        ref={ref}
        rows={rows}
        autoComplete="nope"
        disabled={disabled}
        required={required}
        {...props}
      />
    );
  },
);

export default React.memo(TextArea);
