import cn from 'classnames';
import React, { useState } from 'react';

import { ReactComponent as Cart }
  from 'assets/img/icons/shopping-bag_icon.svg';

import styles from './ModalBtnAnimate.module.scss';

type Props = {
};

export const ModalBtnAnimate: React.FC<Props> = () => {
  const [showModale, setShowModale] = useState(true);

  if (showModale) {
    setTimeout(() => {
      setShowModale(false);
    }, 2000);
  }

  return (
    <Cart
      className={cn(
        styles.animate,
        { [styles.animate__active]: showModale },
      )}
    />
  );
};
