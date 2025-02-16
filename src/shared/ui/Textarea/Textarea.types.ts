import { InputHTMLAttributes } from 'react';

export enum TextareaSizes {
  L = 'lg',
  M = 'md',
  S = 'sm',
  XS = 'xsm',
}

export type TextareaSize = TextareaSizes.L | TextareaSizes.M | TextareaSizes.S;

export interface TextareaProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  helperText: string;
  size?: TextareaSize;
  className?: string;
}
