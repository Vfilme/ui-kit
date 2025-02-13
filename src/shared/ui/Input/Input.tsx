import React from 'react';
import styles from './Input.module.scss';
import { InputProps, InputSizes } from './Input.types';
import cn from 'classnames';

export const Input: React.FC<InputProps> = ({
  helperText,
  size = InputSizes.M,
  disabled = false,
  className = '',
  rounded = false,
  error = false,
  children,
  ...props
}) => {
  return (
    <label className={cn(styles.label, styles[size])}>
      <input
        type="text"
        className={cn(
          styles.input,
          { [styles.rounded]: rounded, [styles.error]: error },
          className
        )}
        {...props}
        disabled={disabled}
      />
      <span className={cn(styles.helperText)}>{helperText}</span>
    </label>
  );
};
