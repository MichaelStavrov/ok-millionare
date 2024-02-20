import { useAppState } from 'src/context/store';
import styles from './UserProgress.module.scss';

const progressData = [
  { num: 9, count: 40, color: 'orange' },
  { num: 8, count: 33 },
  { num: 7, count: 26 },
  { num: 6, count: 20, color: 'orange' },
  { num: 5, count: 16 },
  { num: 4, count: 13 },
  { num: 3, count: 10, color: 'orange' },
  { num: 2, count: 6 },
  { num: 1, count: 3 },
];

const UserProgress = () => {
  const { currentQuestionNum, safeAmount } = useAppState();

  return (
    <ul className={styles.list}>
      {progressData.map(({ num, count, color }) => (
        <li
          style={{
            color: (safeAmount || currentQuestionNum) === num ? 'black' : color,
            backgroundColor: (safeAmount || currentQuestionNum) === num ? '#f9bf50' : undefined,
          }}
          className={styles.item}
          key={num}
        >
          <span>{num}</span>
          <span>{count}</span>
          <span>JT coins</span>
        </li>
      ))}
    </ul>
  );
};

export default UserProgress;
