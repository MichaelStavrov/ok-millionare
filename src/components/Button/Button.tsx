import React, { ButtonHTMLAttributes, CSSProperties, ReactNode, forwardRef } from 'react';
import cn from 'classnames';
import { Loader } from 'components/Loader';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  view?: 'primary' | 'black' | 'outline';
  type?: 'button' | 'reset' | 'submit';
  size?: 'default' | 'small';
  fullWidth?: boolean;
  isLoading?: boolean;
  loaderColor?: 'white' | 'primary';
  withBorder?: boolean;
  mw?: CSSProperties['maxWidth'];
  h?: CSSProperties['height'];
  fz?: CSSProperties['fontSize'];
  fw?: CSSProperties['fontWeight'];
  br?: CSSProperties['borderRadius'];
  ls?: CSSProperties['letterSpacing'];
  style?: CSSProperties;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    view = 'primary',
    type = 'button',
    isLoading,
    loaderColor,
    withBorder,
    mw,
    h,
    fz,
    fw,
    size,
    br,
    ls,
    style,
    ...rest
  } = props;

  const btnClassNames = cn(styles.button, {
    [styles.primary]: view === 'primary',
    [styles.black]: view === 'black',
    [styles.withBorder]: withBorder,
    [styles.small]: size === 'small',
    [styles.outline]: view === 'outline',
  });

  return (
    <button
      className={btnClassNames}
      type={type}
      ref={ref}
      {...rest}
      style={{
        maxWidth: mw,
        height: h,
        fontSize: fz,
        fontWeight: fw,
        borderRadius: br,
        letterSpacing: ls,
        ...style,
      }}
    >
      {isLoading ? <Loader color={loaderColor} /> : children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
