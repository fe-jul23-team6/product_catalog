import React from 'react';
// import { useSearchParams } from 'react-router-dom';

import { Card } from 'components/Card';

import { Phone } from 'types';
// import { DEFAULT_PAGE } from 'utils/constants';
// import { getItems } from 'utils/helpers';

import styles from './CatalogTable.module.scss';

type Props = {
  items: Phone[],
};

export const CatalogTable: React.FC<Props> = ({ items }) => {
  // const [searchParams] = useSearchParams();
  // const page = Number(searchParams.get('page')) || DEFAULT_PAGE;
  // const perPage = Number(searchParams.get('perPage')) || phones.length;

  // const fromItem = (page - 1) * perPage + 1;

  // const maxCountItem = page * perPage;

  // const toItem = Math.min(maxCountItem, phones.length);

  // const items = getItems(fromItem, toItem, phones);

  // eslint-disable-next-line no-console
  // console.log(fromItem, toItem);

  if (!items.length) {
    return null;
  }

  return (
    <div className={styles['catalog-table']}>
      {items.map(item => (
        <Card key={item.id} phone={item} />
      ))}
    </div>
  );
};
