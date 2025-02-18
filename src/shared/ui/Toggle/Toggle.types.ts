import { InputHTMLAttributes } from 'react';

export enum ToggleVariants {
  Check = 'check',
  Uncheck = 'uncheck',
}

export type ToggleVariant = ToggleVariants.Check | ToggleVariants.Uncheck;

export enum ToggleSizes {
  L = 'lg',
  M = 'md',
  S = 'sm',
  XS = 'xsm',
}

export type ToggleSize = ToggleSizes.L | ToggleSizes.M | ToggleSizes.S | ToggleSizes.XS;

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: ToggleVariant;
  size?: ToggleSize;
  disabled?: boolean;
  className?: string;
}
