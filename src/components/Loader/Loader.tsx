import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Loader.module.scss';

interface LoaderProps {
  variant?: 'default' | 'large' | 'small';
  color?: 'white' | 'primary';
  center?: boolean;
}

export const Loader: FC<LoaderProps> = ({ variant = 'default', color = 'white', center }) => (
  <div className={cn({ [styles.center]: center })}>
    <div
      className={cn(styles.loader, {
        [styles.large]: variant === 'large',
      })}
    >
      {[1, 2, 3, 4].map((item) => (
        <div
          className={cn(styles.item, {
            [styles.large]: variant === 'large',
            [styles.small]: variant === 'small',
            [styles.primary]: color === 'primary',
          })}
          key={item}
        />
      ))}
    </div>
  </div>
);
