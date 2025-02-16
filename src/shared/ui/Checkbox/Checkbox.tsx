import React from 'react';
import styles from './Checkbox.module.scss';
import cn from 'classnames';
import { CheckboxProps, CheckboxSizes, CheckboxVariant, CheckboxVariants } from './Checkbox.types';
import { Checked } from './icons/checked';
import { Unchecked } from './icons/unchecked';
import { Indeterminate } from './icons/indeterminate';
import { Definite } from './icons/definite';

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  variant = CheckboxVariants.Check,
  size = CheckboxSizes.M,
  disabled = false,
  className = '',
  ...props
}) => {
  const getIcon = (variant: CheckboxVariant) => {
    switch (variant) {
      case CheckboxVariants.Check:
        return <Checked className={cn(styles.customCheckbox, styles[size])} />;
      case CheckboxVariants.Uncheck:
        return <Unchecked className={cn(styles.customCheckbox, styles[size])} />;
      case CheckboxVariants.Indeterminate:
        return <Indeterminate className={cn(styles.customCheckbox, styles[size])} />;
      case CheckboxVariants.Definite:
        return <Definite className={cn(styles.customCheckbox, styles[size])} />;
    }
  };

  return (
    <label className={cn(styles.checkbox, styles[size])}>
      <input
        type="checkbox"
        className={cn(styles.input, styles[variant], className)}
        {...props}
        disabled={disabled}
      />
      {getIcon(variant)}
      <span className={cn(styles.text)}>{label}</span>
    </label>
  );
};
