import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useAppState } from 'src/context/store';
import styles from './Timer.module.scss';
import { getTimeStyles } from './utils';

const Timer = () => {
  const { playTimer, onToggleTimer, onSetTimerIsOver, timerKey } = useAppState();

  return (
    <div className={styles.timerWrapper} onClick={onToggleTimer}>
      <CountdownCircleTimer
        key={timerKey}
        isPlaying={playTimer}
        duration={22}
        colors={['#ff7701', '#f44c04', '#f63c3c', '#f81d1d']}
        size={220}
        strokeWidth={10}
        trailColor="#f5c75d"
        colorsTime={[20, 10, 5, 0]}
        onComplete={() => onSetTimerIsOver(true)}
      >
        {({ remainingTime }) => {
          return (
            <span style={{ fontWeight: 'var(--fw-bold)', ...getTimeStyles(remainingTime) }}>
              {remainingTime}
            </span>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
