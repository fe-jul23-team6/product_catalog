import React from 'react';
// import { useSearchParams } from 'react-router-dom';

import { Card } from 'components/Card';

import { Phone } from 'types';
// import { DEFAULT_PAGE } from 'utils/constants';
// import { getItems } from 'utils/helpers';

import styles from './CatalogTable.module.scss';

type Props = {
  phones: Phone[],
};

export const CatalogTable: React.FC<Props> = ({ phones }) => {
  // const [searchParams] = useSearchParams();
  // const page = Number(searchParams.get('page')) || DEFAULT_PAGE;
  // const perPage = Number(searchParams.get('perPage')) || phones.length;
  // const fromItem = (page - 1) * perPage + 1;
  // const maxCountItem = page * perPage;
  // const toItem = Math.min(maxCountItem, phones.length);
  // const items = getItems(fromItem, toItem, phones);
  // console.log(fromItem, toItem);

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
            isOrdered={checkInCart(+phone.id)}
            isFavourite={checkInFav(+phone.id)}
          />
        );
      })}
    </div>
  );
};
