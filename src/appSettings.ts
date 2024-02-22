// номера вопросов для несгораемой суммы
export const safeAmounts = [3, 6];

// номер вопроса - количество коинов,
// не менять сортировку - строго от большего к меньшему
export const progressData = [
  { num: 9, count: 40 },
  { num: 8, count: 33 },
  { num: 7, count: 26 },
  { num: 6, count: 20 },
  { num: 5, count: 16 },
  { num: 4, count: 13 },
  { num: 3, count: 10 },
  { num: 2, count: 6 },
  { num: 1, count: 3 },
];

// прогресс для отображения на UI
export const progressDataWithSafeAmounts = progressData.map((item, index) => ({
  ...item,
  color: safeAmounts.includes(item.num) || index === 0 ? 'orange' : undefined,
}));

// выбор тем для вопросов
export const fields = [
  { value: 'java', label: 'Java' },
  { value: 'javascript', label: 'Javascript' },
  { value: 'python', label: 'Python' },
  { value: 'c', label: 'C' },
  { value: 'c++', label: 'C++' },
  { value: 'php', label: 'PHP' },
  { value: 'swift', label: 'Swift' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'kotlin', label: 'Kotlin' },
];

// перменные css в файле index.scss
