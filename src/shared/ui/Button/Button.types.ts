import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonVariants {
  Primary = 'primary',
  Secondary = 'secondary',
  Clear = 'clear',
  Critical = 'critical',
  CriticalSecondary = 'critical-secondary',
}

export type ButtonVariant =
  | ButtonVariants.Primary
  | ButtonVariants.Secondary
  | ButtonVariants.Clear
  | ButtonVariants.Critical
  | ButtonVariants.CriticalSecondary;

export enum ButtonSizes {
  L = 'lg',
  M = 'md',
  S = 'sm',
  XS = 'xsm',
}
export type ButtonSize = ButtonSizes.L | ButtonSizes.M | ButtonSizes.S | ButtonSizes.XS;

export enum ButtonFormates {
  Full = 'full',
  Mini = 'mini',
}
export type ButtonFormat = ButtonFormates.Full | ButtonFormates.Mini;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
  format?: ButtonFormat;
  children: ReactNode;
}
