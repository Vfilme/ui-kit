import { InputHTMLAttributes } from 'react';

export enum CheckboxVariants {
  Check = 'check',
  Uncheck = 'uncheck',
  Indeterminate = 'indeterminate',
  Definite = 'Definite',
}

export type CheckboxVariant =
  | CheckboxVariants.Check
  | CheckboxVariants.Uncheck
  | CheckboxVariants.Indeterminate
  | CheckboxVariants.Definite;

export enum CheckboxSizes {
  L = 'lg',
  M = 'md',
  S = 'sm',
  XS = 'xsm',
}

export type CheckboxSize = CheckboxSizes.L | CheckboxSizes.M | CheckboxSizes.S | CheckboxSizes.XS;

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  disabled?: boolean;
  className?: string;
}
