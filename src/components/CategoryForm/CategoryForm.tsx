import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useAppState } from 'src/context/store';
import { fields } from 'src/appSettings';
import Button from 'components/Button';
import styles from './CategoryForm.module.scss';

const CategoryForm: FC = () => {
  const { getQuestions, questionFetchingStatus } = useAppState();
  const [filedValues, setFieldValues] = useState<
    Record<string, { value: string; checked: boolean }>
  >({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = Object.values(filedValues)
      .filter(({ checked }) => checked)
      .map(({ value }) => value);

    getQuestions(data);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const { checked, value } = e.target;

    setFieldValues((prev) => ({
      ...prev,
      [name]: {
        value,
        checked,
      },
    }));
  };

  return (
    <div className={styles.layout}>
      <span className={styles.title}>Выберите темы вопросов</span>
      <form className={styles.form}>
        <ul className={styles.categoryList}>
          {fields.map(({ label, value }) => (
            <li className={styles.item} key={label}>
              <label htmlFor={label}>{label}</label>
              <input
                className={styles.checkbox}
                id={label}
                type="checkbox"
                value={filedValues[label]?.value || value}
                checked={filedValues[label]?.checked || false}
                onChange={(e) => handleChange(e, label)}
              />
            </li>
          ))}
        </ul>
        <Button
          mw={220}
          view="outline"
          type="submit"
          onClick={onSubmit}
          isLoading={questionFetchingStatus === 'loading'}
        >
          Начать игру
        </Button>
      </form>
    </div>
  );
};

export default CategoryForm;
