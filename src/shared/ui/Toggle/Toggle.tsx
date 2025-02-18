import React from 'react';
import styles from './Toggle.module.scss';
import cn from 'classnames';
import { ToggleProps, ToggleSizes } from './Toggle.types';

export const Toggle: React.FC<ToggleProps> = ({
  size = ToggleSizes.M,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <label className={cn(styles.toggle, styles[size])}>
      <input
        type="checkbox"
        className={cn(styles.input, className)}
        {...props}
        disabled={disabled}
      />
      <span className={cn(styles.slider, styles[size])}></span>
    </label>
  );
};
