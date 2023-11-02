import React from 'react';

import { Card } from 'components';

import { Phone } from 'types';

import styles from './CatalogTable.module.scss';

type Props = {
  phones: Phone[],
};

export const CatalogTable: React.FC<Props> = ({ phones }) => {
  const checkInCart = (id: number) => {
    const storedCart = localStorage.getItem('cartItems');
    const currentCart: number[][] = storedCart
      ? JSON.parse(storedCart)
      : [];

    const itemIndex = currentCart.findIndex(item => item[0] === id);

    if (itemIndex === -1) {
      return false;
    }

    return true;
  };

  const checkInFav = (id: number) => {
    const storedFavs = localStorage.getItem('favouritesIds');
    const currentFavs: number[] = storedFavs
      ? JSON.parse(storedFavs)
      : [];

    if (!currentFavs.includes(id)) {
      return false;
    }

    return true;
  };

  return (
    <div className={styles['catalog-table']}>
      {phones.map(phone => {
        return (
          <Card
            key={phone.id}
            phone={phone}
            isOrdered={checkInCart(Number(phone.id))}
            isFavourite={checkInFav(Number(phone.id))}
          />
        );
      })}
    </div>
  );
};
