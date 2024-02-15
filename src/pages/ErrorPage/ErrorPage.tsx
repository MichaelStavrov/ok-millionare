import React, { FC } from 'react';

import errorImage from 'assets/images/error-image.png';
import styles from './ErrorPage.module.scss';

const ErrorPage: FC = () => {
  return (
    <div className={styles.errorPage}>
      <img className={styles.image} src={errorImage} alt="ошибка" />
      <span className={styles.errorMessage}>
        Что-то пошло не так.
        <br />
        Попробуйте перезагрузить сраницу или зайти позже.
      </span>
    </div>
  );
};

export default ErrorPage;
