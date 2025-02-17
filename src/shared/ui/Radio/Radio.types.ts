import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export enum RadioVariants {
  Checked = 'checked',
  Unchecked = 'unchecked',
}

export type RadioVariant = RadioVariants.Checked | RadioVariants.Unchecked;

export enum RadioSizes {
  L = 'lg',
  M = 'md',
  S = 'sm',
  XS = 'xsm',
}

export type RadioSize = RadioSizes.L | RadioSizes.M | RadioSizes.S | RadioSizes.XS;

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant: RadioVariant;
  size?: RadioSize;
  disabled?: boolean;
  className?: string;
}
