import { CSSProperties } from 'react';

export const getTimeStyles = (time: number): CSSProperties => {
  if (time <= 5)
    return {
      color: '#f63c3c',
      fontSize: 'var(--fz-timer-l)',
    };
  if (time <= 10)
    return {
      color: '#ffb40a',
      fontSize: 'var(--fz-timer-m)',
    };

  return {
    color: '#ffffff',
    fontSize: 'var(--fz-timer-s)',
  };
};
