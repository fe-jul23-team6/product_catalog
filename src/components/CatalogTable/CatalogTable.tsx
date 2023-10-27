import React from 'react';

import { Card } from 'components/Card';

import { Phone } from 'types';
import styles from './CatalogTable.module.scss';

type Props = {
  phones: Phone[],
};

export const CatalogTable: React.FC<Props> = ({ phones }) => {
  return (
    <div className={styles['catalog-table']}>
      {phones.map(phone => (
        <Card key={phone.id} phone={phone} />
      ))}
    </div>
  );
};

// (feat/create-catalog)
