import { Answer } from 'src/types';
import { getRandomNum } from './getRandomNum';

export const getIncorrectQuestionIndexes = (variants: Answer[]) => {
  const correctQuestionIndex = variants.findIndex(({ correct }) => Boolean(correct));

  let randomFirst = null;
  let randomIndex = getRandomNum(0, 4);

  while (randomIndex === correctQuestionIndex) {
    randomIndex = getRandomNum(0, 4);
  }
  randomFirst = randomIndex;

  let randomSecond = null;

  while (randomIndex === correctQuestionIndex || randomIndex === randomFirst) {
    randomIndex = getRandomNum(0, 4);
  }

  randomSecond = randomIndex;

  return {
    randomFirst,
    randomSecond,
  };
};
