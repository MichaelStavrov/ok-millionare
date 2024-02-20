import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { Answer } from 'src/types';
import styles from './QuestionComponent.module.scss';
import { useAppState } from 'src/context/store';
import Button from 'components/Button';
import { getIncorrectQuestionIndexes } from 'utils/getIncorrectQuestionIndexes';
import { questions } from 'src/mocks';

const getSafeAmount = (num: number) => {
  if (num <= 3) return 1;
  if (num <= 6) return 3;
  if (num <= 9) return 6;

  return 9;
};

const QuestionComponent: FC = () => {
  const {
    // questions,
    nextQuestion,
    onPlayTimer,
    onPauseTimer,
    onChangeCurrentQuestionNum,
    currentQuestionNum,
    onChangeSafeAmount,
    end,
    onEnd,
    onReset,
    userAnswer,
    onSetUserAnswer,
    timerIsOver,
    incTimerKey,
    helpers,
  } = useAppState();

  const [timer, setTimer] = useState(0);

  const BLINK_DURATION = 2;

  useEffect(() => {
    if (timerIsOver) {
      const safeAmount = getSafeAmount(currentQuestionNum);
      onChangeSafeAmount(safeAmount);

      onEnd('lose');
    }
  }, [currentQuestionNum, onChangeSafeAmount, onEnd, onReset, timerIsOver]);

  useEffect(() => {
    setTimeout(() => {
      if (questions.length === currentQuestionNum && userAnswer?.correct) {
        onEnd('win');
      }

      if (userAnswer?.correct === false) {
        onEnd('lose');
      }
    }, 2000);
  }, [currentQuestionNum, onEnd, questions.length, userAnswer?.correct]);

  useEffect(() => {
    let interval: any = null;

    if (userAnswer) {
      interval = setInterval(() => {
        setTimer((prev) => (prev += 1));
      }, 1000);
      if (timer >= BLINK_DURATION) {
        if (!userAnswer.correct) {
          const safeAmount = getSafeAmount(currentQuestionNum);
          onChangeSafeAmount(safeAmount);
        }
        clearInterval(interval);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, userAnswer, onChangeCurrentQuestionNum, currentQuestionNum, onChangeSafeAmount]);

  const question = questions[currentQuestionNum - 1];
  const [halfIncorrectVariants, setHalfIncorrectVariants] = useState(() =>
    getIncorrectQuestionIndexes(question.answers)
  );

  useEffect(() => {
    setHalfIncorrectVariants(getIncorrectQuestionIndexes(question.answers));
  }, [question.answers]);

  if (!question) return null;

  const handleAnswerClick = (answer: Answer) => {
    onPauseTimer();
    onSetUserAnswer(answer);
  };

  const getBc = (id: number, correct: boolean) => {
    if (userAnswer?.id === id && correct) {
      return 'green';
    }

    if (userAnswer?.id === id && !correct) {
      return 'var(--danger)';
    }

    if (userAnswer?.id !== id && correct) {
      return 'var(--success)';
    }

    if (userAnswer?.id !== id && !correct) {
      return 'linear-gradient(#304a5d, #02111c)';
    }
  };

  const onNext = () => {
    incTimerKey();
    if (end === 'none') {
      onSetUserAnswer(null);
      nextQuestion();
      onPlayTimer();
    } else {
      onReset();
    }
    setTimer(0);
  };

  return (
    <div className={styles.layout}>
      <span className={styles.question}>{question.question}</span>
      <div className={styles.answers}>
        {question.answers.map(({ id, text, correct }, index) => (
          <button
            type="button"
            className={cn(styles.answer, {
              [styles.animateAnswer]: userAnswer?.id === id,
              [styles.nonHover]: timer === BLINK_DURATION || !!userAnswer,
              [styles.hidden]:
                helpers.half === currentQuestionNum &&
                (index === halfIncorrectVariants.randomFirst ||
                  index === halfIncorrectVariants.randomSecond),
            })}
            key={id}
            onClick={() => handleAnswerClick({ id, text, correct })}
            style={{
              background:
                (userAnswer && timer === BLINK_DURATION) || timerIsOver ? getBc(id, correct) : '',
            }}
            disabled={timer === BLINK_DURATION || !!userAnswer || timerIsOver}
          >
            {text} {correct ? 'correct' : ''}
          </button>
        ))}
      </div>
      <Button
        mw={240}
        style={{ padding: 12 }}
        onClick={onNext}
        disabled={timer !== BLINK_DURATION && !timerIsOver}
      >
        {end === 'none' ? 'Следующий вопрос' : 'Сыграть заново'}
      </Button>
    </div>
  );
};

export default QuestionComponent;
