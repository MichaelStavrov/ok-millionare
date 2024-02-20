import GameHelpers from 'components/GameHelpers';
import QuestionComponent from 'components/QuestionComponent';
import Rating from 'components/Rating';
import Timer from 'components/Timer';
import UserProgress from 'components/UserProgress';
import { useEffect } from 'react';
import { service } from 'src/api/service';
// import { service } from 'src/api/service';
import { useAppState } from 'src/context/store';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const { questions, getQuestions, getRating } = useAppState();

  useEffect(() => {
    getQuestions();
    getRating();
  }, [getQuestions, getRating]);

  return (
    <div className={styles.mainPage}>
      {/* <button
        onClick={() => {
          service.deleteUserResult(9);
          // service.sendResult({ name: `User ${Math.random()}`, score: 2 });
        }}
      >
        Send
      </button> */}
      <div className={styles.topContainer}>
        <Rating />
        <div className={styles.centerContainer}>
          <GameHelpers />
          <div className={styles.timer}>
            <Timer />
          </div>
        </div>

        <UserProgress />
      </div>

      {questions.length && <QuestionComponent />}
    </div>
  );
};

export default MainPage;
