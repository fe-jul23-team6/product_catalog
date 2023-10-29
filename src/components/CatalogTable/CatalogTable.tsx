import React from 'react';

import { Card } from 'components/Card';

import { Phone } from 'types';
import styles from './CatalogTable.module.scss';

type Props = {
  phones: Phone[],
};

export const CatalogTable: React.FC<Props> = ({ phones }) => {
  const storedCart = localStorage.getItem('cartItems');
  const currentCart: number[][] = storedCart
    ? JSON.parse(storedCart)
    : [];
  const cartItemsIds = currentCart.map(purchase => purchase[0]);

  return (
    <div className={styles['catalog-table']}>
      {phones.map(phone => {
        const isOrdered = cartItemsIds.includes(+phone.id);

        return (
          <Card
            key={phone.id}
            phone={phone}
            isOrdered={isOrdered}
          />
        );
      })}
    </div>
  );
};
