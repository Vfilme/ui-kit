import React from 'react';
import styles from './Radio.module.scss';
import cn from 'classnames';

import { RadioChecked } from './icons/radioChecked';
import { RadioProps, RadioSizes, RadioVariant, RadioVariants } from './Radio.types';
import { RadioUnchecked } from './icons/radioUnchecked';

export const Radio: React.FC<RadioProps> = ({
  variant = RadioVariants.Unchecked,
  size = RadioSizes.M,
  disabled = false,
  className = '',
  ...props
}) => {
  const getIcon = (variant: RadioVariant) => {
    switch (variant) {
      case RadioVariants.Checked:
        return (
          <RadioChecked {...props} className={cn(styles.customRadio, styles[size], className)} />
        );
      case RadioVariants.Unchecked:
        return (
          <RadioUnchecked {...props} className={cn(styles.customRadio, styles[size], className)} />
        );
    }
  };

  return (
    <label className={styles.label}>
      <input type="radio" className={styles.input} disabled={disabled} />
      {getIcon(variant)}
    </label>
  );
};
