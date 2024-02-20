export type FetchingStatus = 'idle' | 'loading' | 'loaded' | 'ok' | 'error';

export interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export type GameResult = 'win' | 'lose' | 'none';

export interface Helpers {
  half: number;
  audience: number;
}

export interface Rating {
  id: number;
  name: string;
  score: number;
}

export interface ResultData {
  name: string;
  score: number;
}
