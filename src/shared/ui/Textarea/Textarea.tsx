import React from 'react';
import styles from './Textarea.module.scss';
import cn from 'classnames';
import { TextareaProps, TextareaSizes } from './Textarea.types';

export const Textarea: React.FC<TextareaProps> = ({
  size = TextareaSizes.M,
  className = '',
  helperText,
}) => {
  return (
    <label className={cn(styles.label, styles[size])}>
      <textarea className={cn(styles.textarea, styles[size], className)} />
      <span className={styles.helperText}>{helperText}</span>
    </label>
  );
};
