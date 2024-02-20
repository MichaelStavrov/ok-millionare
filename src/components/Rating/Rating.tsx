import { useAppState } from 'src/context/store';
import { rating } from 'src/mocks';
import styles from './Rating.module.scss';

const Rating = () => {
  // const { ratingData } = useAppState();

  // if (!ratingData.length) return null;

  return (
    <ul className={styles.list}>
      {rating.map(({ id, name, score }, index) => (
        <li
          style={index === 0 ? { backgroundColor: 'rgb(249, 191, 80)', color: 'black' } : {}}
          className={styles.item}
          key={id}
        >
          <span>{name}</span>
          <span>{score}</span>
        </li>
      ))}
    </ul>
  );
};

export default Rating;
