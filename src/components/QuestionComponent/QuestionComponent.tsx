import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { Answer } from 'src/types';
import styles from './QuestionComponent.module.scss';
import { useAppState } from 'src/context/store';
import Button from 'components/Button';
import { getIncorrectQuestionIndexes } from 'utils/getIncorrectQuestionIndexes';
import { getSafeAmount } from 'utils/getSafeAmount';
import { getBc } from 'utils/getBc';
// import { questions } from 'src/mocks';

const QuestionComponent: FC = () => {
  const {
    questions,
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
  const [blinkTimer, setBlinkTimer] = useState(0);
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
        setBlinkTimer((prev) => (prev += 1));
      }, 1000);
      if (blinkTimer >= BLINK_DURATION) {
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
  }, [blinkTimer, userAnswer, onChangeCurrentQuestionNum, currentQuestionNum, onChangeSafeAmount]);

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

  const onNext = () => {
    incTimerKey();
    if (end === 'none') {
      onSetUserAnswer(null);
      nextQuestion();
      onPlayTimer();
    } else {
      onReset();
    }
    setBlinkTimer(0);
  };

  const showAnswerBackground = (userAnswer && blinkTimer === BLINK_DURATION) || timerIsOver;
  const answerDisabled = blinkTimer === BLINK_DURATION || !!userAnswer || timerIsOver;
  const getAnswerStyles = (id: number, index: number) => ({
    [styles.animateAnswer]: userAnswer?.id === id,
    [styles.nonHover]: blinkTimer === BLINK_DURATION || !!userAnswer,
    [styles.hidden]:
      helpers.half === currentQuestionNum &&
      (index === halfIncorrectVariants.randomFirst || index === halfIncorrectVariants.randomSecond),
  });

  return (
    <div className={styles.layout}>
      <span className={styles.question} dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className={styles.answers}>
        {question.answers.map(({ id, text, correct }, index) => (
          <button
            type="button"
            className={cn(styles.answer, getAnswerStyles(id, index))}
            key={id}
            onClick={() => handleAnswerClick({ id, text, correct })}
            style={{
              background: getBc(showAnswerBackground, id, correct, userAnswer?.id),
            }}
            disabled={answerDisabled}
          >
            {text} {correct ? 'correct' : ''}
          </button>
        ))}
      </div>
      <Button
        mw={240}
        style={{ padding: 12 }}
        onClick={onNext}
        // disabled={timer !== BLINK_DURATION && !timerIsOver}
      >
        {end === 'none' ? 'Следующий вопрос' : 'Сыграть заново'}
      </Button>
    </div>
  );
};

export default QuestionComponent;
