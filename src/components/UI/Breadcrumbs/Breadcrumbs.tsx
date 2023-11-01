/* eslint-disable react/require-default-props */
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { ReactComponent as HomeIcon }
  from 'assets/img/icons/home_icon.svg';
import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';

import styles from './Breadcrumbs.module.scss';

interface Props {
  text: string
  to: string;
  itemName?: string | undefined;
}

export const Breadcrumbs: React.FC<Props> = ({ text, to, itemName }) => {
  const { phoneId, tabletId, accessoryId } = useParams();

  return (
    <div className={styles.location}>
      <div className={styles['location__icon-home']}>
        <Link to="/home" className={styles['location__icon-home-link']}>
          <HomeIcon />
        </Link>
      </div>

      <div className={styles['location__icon-chevron']}>
        <ChevronIcon />
      </div>

      <div className={`${styles['location__selected-page']} ${styles['selected-page']}`}>
        <Link to={to} className={styles['selected-page__paragraph']}>
          {text}
        </Link>
      </div>

      {(phoneId || tabletId || accessoryId) && (
        <>
          <div className={styles['location__icon-chevron']}>
            <ChevronIcon />
          </div>

          <p className={styles['selected-page__paragraph']}>
            {itemName}
          </p>
        </>
      )}
    </div>
  );
};
