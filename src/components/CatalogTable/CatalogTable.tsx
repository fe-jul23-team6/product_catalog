import React from 'react';

import { Card } from 'components/Card';

import { Phone } from 'types';
import styles from './CatalogTable.module.scss';

type Props = {
  phones: Phone[],
};

export const CatalogTable: React.FC<Props> = ({ phones }) => {
  const cartIdsString = localStorage.getItem('cartItemsIds');
  const cartIds:string[] = cartIdsString
    ? JSON.parse(cartIdsString)
    : [];

  return (
    <div className={styles['catalog-table']}>
      {phones.map(phone => {
        const isOrdered = cartIds.includes(phone.id);

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
