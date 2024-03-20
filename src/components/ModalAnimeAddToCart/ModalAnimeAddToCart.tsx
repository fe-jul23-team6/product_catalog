import React, { useState } from 'react';
import cn from 'classnames';

import { BASE_URL } from 'utils/fetchProducts';

import styles from './ModalAnimeAddToCart.module.scss';

type Props = {
  itemImg: string,
  hasModale: boolean,
};

export const ModalAnimeAddToCart: React.FC<Props> = ({ itemImg, hasModale }) => {
  const [showModale, setShowModale] = useState(true);

  if (hasModale) {
    setTimeout(() => {
      setShowModale(false);
    }, 900);
  }

  return (
    <div
      className={cn(
        styles.anime,
        { [styles.hide]: !showModale },
      )}
    >
      <img
        className={styles.anime__img}
        src={`${BASE_URL}/${itemImg}`}
        alt={itemImg}
      />
    </div>
  );
};
