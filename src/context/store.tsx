import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { service } from 'src/api/service';
import { Answer, FetchingStatus, GameResult, Helpers, Question, Rating } from 'src/types';

interface AppState {
  questions: Question[];
  getQuestions: () => void;
  questionFetchingStatus: FetchingStatus;
  currentQuestionNum: number;
  nextQuestion: () => void;
  onChangeCurrentQuestionNum: (num: number) => void;
  playTimer: boolean;
  onPauseTimer: () => void;
  onPlayTimer: () => void;
  onToggleTimer: () => void;
  safeAmount: number;
  onChangeSafeAmount: (num: number) => void;
  end: GameResult;
  onEnd: (result: GameResult) => void;
  onReset: () => void;
  userAnswer: Answer | null;
  onSetUserAnswer: (userAnswer: Answer | null) => void;
  timerIsOver: boolean;
  onSetTimerIsOver: (isOver: boolean) => void;
  timerKey: number;
  incTimerKey: () => void;
  helpers: Helpers;
  onChangeHelpers: (helpers: Helpers) => void;
  ratingData: Rating[];
  getRating: () => void;
  ratingFetchingStatus: FetchingStatus;
}

const initialState: AppState = {
  questions: [],
  getQuestions: () => {},
  questionFetchingStatus: 'idle',
  currentQuestionNum: 1,
  nextQuestion: () => {},
  onChangeCurrentQuestionNum: () => {},
  playTimer: true,
  onPauseTimer: () => {},
  onPlayTimer: () => {},
  onToggleTimer: () => {},
  safeAmount: 0,
  onChangeSafeAmount: () => {},
  end: 'none',
  onEnd: () => {},
  onReset: () => {},
  userAnswer: null,
  onSetUserAnswer: () => {},
  timerIsOver: false,
  onSetTimerIsOver: () => {},
  timerKey: 1,
  incTimerKey: () => {},
  helpers: {
    half: 0,
    audience: 0,
  },
  onChangeHelpers: () => {},
  ratingData: [],
  getRating: () => {},
  ratingFetchingStatus: 'idle',
};

const MyContext = createContext(initialState);

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionFetchingStatus, setQuestionFetchingStatus] = useState<FetchingStatus>('idle');
  const [currentQuestionNum, setCurrentQuestionNum] = useState(1);
  const [playTimer, setPlayTimer] = useState(true);
  const [safeAmount, setSafeAmount] = useState(0);
  const [end, setEnd] = useState<GameResult>('none');
  const [userAnswer, setUserAnswer] = useState<Answer | null>(null);
  const [timerIsOver, setTimerIsOver] = useState(false);
  const [timerKey, setTimerKey] = useState(1);
  const [helpers, setHelpers] = useState<Helpers>({
    half: 0,
    audience: 0,
  });
  const [ratingData, setRatingData] = useState<Rating[]>([]);
  const [ratingFetchingStatus, setRatingFetchingStatus] = useState<FetchingStatus>('idle');

  const getQuestions = useCallback(async () => {
    try {
      setQuestionFetchingStatus('loading');
      const data = await service.fetchQuestions();
      setQuestions(data);
    } catch (err) {
      console.log('err', err);
      setQuestionFetchingStatus('error');
    } finally {
      setQuestionFetchingStatus('loaded');
    }
  }, []);

  const getRating = useCallback(async () => {
    try {
      setRatingFetchingStatus('loading');
      const data = await service.fetchRating();
      const sortedData = data?.length ? data.sort((a, b) => b.score - a.score) : [];
      setRatingData(sortedData);
    } catch (err) {
      console.log('err', err);
      setRatingFetchingStatus('error');
    } finally {
      setRatingFetchingStatus('loaded');
    }
  }, []);

  const nextQuestion = useCallback(() => setCurrentQuestionNum((prev) => prev + 1), []);
  const onChangeCurrentQuestionNum = useCallback((num: number) => setCurrentQuestionNum(num), []);
  const onPauseTimer = useCallback(() => setPlayTimer(false), []);
  const onPlayTimer = useCallback(() => setPlayTimer(true), []);
  const onToggleTimer = useCallback(() => setPlayTimer((prev) => !prev), []);
  const onChangeSafeAmount = useCallback((num: number) => setSafeAmount(num), []);
  const onEnd = useCallback((result: GameResult) => setEnd(result), []);
  const onSetUserAnswer = useCallback((answer: Answer | null) => setUserAnswer(answer), []);
  const onSetTimerIsOver = useCallback((isOver: boolean) => setTimerIsOver(isOver), []);
  const incTimerKey = useCallback(() => setTimerKey((prev) => prev + 1), []);
  const onChangeHelpers = useCallback((help: Helpers) => setHelpers(help), []);

  const onReset = useCallback(() => {
    getQuestions();
    setCurrentQuestionNum(1);
    setPlayTimer(true);
    setSafeAmount(0);
    setEnd('none');
    setUserAnswer(null);
    setTimerIsOver(false);
    setHelpers({
      half: 0,
      audience: 0,
    });
  }, [getQuestions]);

  const appState: AppState = {
    questions,
    getQuestions,
    questionFetchingStatus,
    currentQuestionNum,
    nextQuestion,
    playTimer,
    onPauseTimer,
    onPlayTimer,
    onToggleTimer,
    onChangeCurrentQuestionNum,
    safeAmount,
    onChangeSafeAmount,
    end,
    onEnd,
    onReset,
    userAnswer,
    onSetUserAnswer,
    timerIsOver,
    onSetTimerIsOver,
    timerKey,
    incTimerKey,
    helpers,
    onChangeHelpers,
    ratingData,
    getRating,
    ratingFetchingStatus,
  };

  return <MyContext.Provider value={appState}>{children}</MyContext.Provider>;
};

export default AppContextProvider;

export const useAppState = () => {
  const state = useContext(MyContext);

  return state;
};
