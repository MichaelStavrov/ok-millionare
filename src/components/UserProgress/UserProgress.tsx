import { progressDataWithSafeAmounts } from 'src/appSettings';
import { useAppState } from 'src/context/store';
import styles from './UserProgress.module.scss';

const UserProgress = () => {
  const { currentQuestionNum, safeAmount } = useAppState();

  return (
    <ul className={styles.list}>
      {progressDataWithSafeAmounts.map(({ num, count, color }) => {
        const currentQuestion = (safeAmount || currentQuestionNum) === num;
        return (
          <li
            style={{
              color: currentQuestion ? 'black' : color,
              backgroundColor: currentQuestion ? '#f9bf50' : undefined,
            }}
            className={styles.item}
            key={num}
          >
            <span>{num}</span>
            <span>{count}</span>
            <span>JT coins</span>
          </li>
        );
      })}
    </ul>
  );
};

export default UserProgress;
