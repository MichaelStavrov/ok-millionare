import { FC } from 'react';
import cn from 'classnames';
import { useAppState } from 'src/context/store';
import closeIcon from 'assets/images/close.png';
import styles from './GameHelpers.module.scss';

const GameHelpers: FC = () => {
  const { onChangeHelpers, helpers, currentQuestionNum, end } = useAppState();
  return (
    <div className={styles.layout}>
      <button
        className={cn(styles.helper, styles['helper-1'])}
        onClick={() => {
          if (helpers.half) return;
          onChangeHelpers({
            ...helpers,
            half: currentQuestionNum,
          });
        }}
        disabled={end !== 'none'}
      >
        {!!helpers.half && <img className={styles.closeIcon} src={closeIcon} alt="img" />}
      </button>
      <button
        className={cn(styles.helper, styles['helper-2'])}
        onClick={() => {
          if (helpers.audience) return;
          onChangeHelpers({
            ...helpers,
            audience: currentQuestionNum,
          });
        }}
        disabled={end !== 'none'}
      >
        {!!helpers.audience && <img className={styles.closeIcon} src={closeIcon} alt="img" />}
      </button>
    </div>
  );
};

export default GameHelpers;
