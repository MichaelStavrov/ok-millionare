import { useEffect, useState } from 'react';
import { service } from 'src/api/service';
import { FetchingStatus, Rating } from 'src/types';
// import { rating } from 'src/mocks';
import styles from './RatingList.module.scss';

const RatingList = () => {
  const [ratingData, setRatingData] = useState<Rating[]>([]);
  const [ratingFetchingStatus, setRatingFetchingStatus] = useState<FetchingStatus>('idle');

  const getRating = async () => {
    try {
      setRatingFetchingStatus('loading');
      const data = await service.fetchRating();
      setRatingData(data);
    } catch (err) {
      console.log('err', err);
      setRatingFetchingStatus('error');
    } finally {
      setRatingFetchingStatus('loaded');
    }
  };

  useEffect(() => {
    getRating();
  }, []);

  const sortedData = ratingData?.length ? ratingData.sort((a, b) => b.score - a.score) : [];

  return (
    <div className={styles.layout}>
      <div className={styles.title}>Топ игроков</div>
      {ratingFetchingStatus === 'loaded' && ratingData.length > 0 && (
        <ul className={styles.list}>
          {sortedData.map(({ id, name, score }, index) => (
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
      )}
    </div>
  );
};

export default RatingList;
