import { FC } from 'react';
import cn from 'classnames';
import { useAppState } from 'src/context/store';
import closeIcon from 'assets/images/close.png';
import styles from './GameHelpers.module.scss';
import { Helpers } from 'src/types';

const GameHelpers: FC = () => {
  const { onChangeHelpers, helpers, currentQuestionNum, end, onPauseTimer } = useAppState();

  const handleHelperClick = (helperName: keyof Helpers) => {
    if (helpers[helperName]) return;
    onChangeHelpers({
      ...helpers,
      [helperName]: currentQuestionNum,
    });

    if (helperName === 'audience') {
      onPauseTimer();
    }
  };

  return (
    <div className={styles.layout}>
      <button
        className={cn(styles.helper, styles['helper-1'])}
        onClick={() => handleHelperClick('half')}
        disabled={end !== 'none' || !!helpers.half}
      >
        {!!helpers.half && <img className={styles.closeIcon} src={closeIcon} alt="img" />}
      </button>
      <button
        className={cn(styles.helper, styles['helper-2'])}
        onClick={() => handleHelperClick('audience')}
        disabled={end !== 'none' || !!helpers.audience}
      >
        {!!helpers.audience && <img className={styles.closeIcon} src={closeIcon} alt="img" />}
      </button>
    </div>
  );
};

export default GameHelpers;
