import { Question, Rating } from './types';
import img from 'assets/images/error-image.png';

export const questions: Question[] = [
  {
    id: 1,
    question: `<span>Вопрос 1 <br/><img src=${img}/><br/>Назовите среднее время работы алгоритма быстрой сортировки для массива из n элементов Назовите среднее время работы алгоритма быстрой сортировки для массива из n</span>`,
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: true,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:
      'Вопрос 1 Назовите среднее время работы алгоритма быстрой сортировки для массива из n элементов',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: true,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'Вопрос 3',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: true,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: 'Вопрос 4',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: 'Вопрос 5',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: 'Вопрос 6',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question: 'Вопрос 7',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: 'Вопрос 8',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
  {
    id: 9,
    question: 'Вопрос 9',
    answers: [
      {
        id: 1,
        text: 'Ответ 1',
        correct: false,
      },
      {
        id: 2,
        text: 'Ответ 2',
        correct: false,
      },
      {
        id: 3,
        text: 'Ответ 3',
        correct: false,
      },
      {
        id: 4,
        text: 'Ответ 4',
        correct: true,
      },
    ],
  },
];
export const rating: Rating[] = [
  {
    id: 1,
    name: 'Александр Иванов',
    score: 1,
  },
  {
    id: 2,
    name: 'Сергей Петров',
    score: 3,
  },
  {
    id: 3,
    name: 'Джейсон Стейтем',
    score: 3,
  },
  {
    id: 4,
    name: 'Иван Сидоров',
    score: 6,
  },
  {
    name: 'Райан Гослинг',
    score: 5,
    id: 7,
  },
  {
    name: 'Алексей Корнеев',
    score: 5,
    id: 8,
  },
];
