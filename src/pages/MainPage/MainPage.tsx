import GameHelpers from 'components/GameHelpers';
import QuestionComponent from 'components/QuestionComponent';
import Rating from 'components/Rating';
import Timer from 'components/Timer';
import UserProgress from 'components/UserProgress';
// import { service } from 'src/api/service';
import { useAppState } from 'src/context/store';
import styles from './MainPage.module.scss';
// import { questions } from 'src/mocks';
import CategoryForm from 'components/CategoryForm';

const MainPage = () => {
  const { questions } = useAppState();

  return (
    <>
      {/* <button
        onClick={() => {
          service.deleteUserResult(9);
          // service.sendResult({ name: `User ${Math.random()}`, score: 2 });
        }}
      >
        Send
      </button> */}
      {/* {questionFetchingStatus === 'loading' && <Loader variant="large" />} */}

      {questions.length > 0 ? (
        <div className={styles.mainPage}>
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
          <QuestionComponent />
        </div>
      ) : (
        <div className={styles.formContainer}>
          <CategoryForm />
        </div>
      )}
    </>
  );
};

export default MainPage;
