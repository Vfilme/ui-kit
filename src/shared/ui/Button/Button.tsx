import { FC } from 'react';
import { ButtonFormates, ButtonProps, ButtonSizes, ButtonVariants } from './Button.types';
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
  variant = ButtonVariants.Primary,
  size = ButtonSizes.M,
  disabled = false,
  className = '',
  rounded = false,
  children,
  format = ButtonFormates.Full,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        styles[format],
        { [styles.rounded]: rounded },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
