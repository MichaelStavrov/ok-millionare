import { CSSProperties } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useAppState } from 'src/context/store';
import styles from './Timer.module.scss';

const Timer = () => {
  const { playTimer, onToggleTimer, onSetTimerIsOver, timerKey } = useAppState();
  const getTimeStyles = (time: number): CSSProperties => {
    if (time <= 5)
      return {
        color: '#f63c3c',
        fontSize: '80px',
      };
    if (time <= 10)
      return {
        color: '#ffb40a',
        fontSize: '70px',
      };

    return {
      color: '#ffffff',
      fontSize: '60px',
    };
  };

  // const timeLabelStyles = getTimeStyles()
  return (
    <div className={styles.timerWrapper} onClick={onToggleTimer}>
      <CountdownCircleTimer
        key={timerKey}
        isPlaying={playTimer}
        duration={22}
        colors={['#ff7701', '#f44c04', '#f63c3c', '#f81d1d']}
        // colors={['#ffb508', '#ffb508']}
        size={220}
        strokeWidth={10}
        // trailStrokeWidth={14}
        trailColor="#f5c75d"
        colorsTime={[20, 10, 5, 0]}
        // initialRemainingTime={15}
        onComplete={() => {
          onSetTimerIsOver(true);
        }}
      >
        {({ remainingTime }) => {
          return (
            <span style={{ fontWeight: 700, ...getTimeStyles(remainingTime) }}>
              {remainingTime}
            </span>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
