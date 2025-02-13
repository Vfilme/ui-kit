import { InputHTMLAttributes, ReactNode } from 'react';

export enum InputSizes {
  L = 'lg',
  M = 'md',
  S = 'sm',
}

export type InputSize = InputSizes.L | InputSizes.M | InputSizes.S;

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  helperText: string;
  size?: InputSize;
  rounded?: boolean;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  children: ReactNode;
}
