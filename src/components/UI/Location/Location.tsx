import React from 'react';

import { ReactComponent as HomeIcon }
  from 'assets/img/icons/home_icon.svg';

import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';

import styles from './Location.module.scss';

export const Location: React.FC = () => {
  return (
    <div className={styles.location}>
      <span className={styles.location__icon}>
        <HomeIcon />
      </span>

      <span className={styles.location__icon}>
        <ChevronIcon className={styles['location__chevron-right']} />
      </span>

      <span>Phones</span>
    </div>
  );
};
