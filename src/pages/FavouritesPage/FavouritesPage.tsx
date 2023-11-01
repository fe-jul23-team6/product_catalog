import { useState, useEffect, useContext } from 'react';

import { Card, PageTitle } from 'components';
import { Loader, PageLocation } from 'components/UI';
import { ProductsContext } from 'context';

import { Phone } from 'types';
import { getPhonesByIds } from 'services/products.service';
import { MESSAGES } from 'utils/constants';

import styles from './FavouritesPage.module.scss';

export const FavouritesPage = () => {
  const {
    checkInCart,
    checkInFav,
    currentFavoritesIds,
  } = useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(false);
  const [favourites, setFavourites] = useState<Phone[]>([]);

  const loadData = async () => {
    if (!currentFavoritesIds.length) {
      return;
    }

    setIsLoading(true);
    const favData = await getPhonesByIds(currentFavoritesIds);

    setIsLoading(false);
    setFavourites(favData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.favourites}>
      <div className={styles.favourites__container}>
        <div className={styles.favourites__path}>
          <PageLocation to="/favourites" text="Favourites" />
        </div>

        <div className={styles.favourites__title}>
          <PageTitle title="Favourites" />

          {!favourites.length
            ? (
              <p>{MESSAGES.NO_ITEMS}</p>
            )
            : (
              <p className={styles['items-on-page']}>
                {`${favourites.length} items`}
              </p>
            )}
        </div>

        {isLoading && favourites.length ? (
          <Loader />
        ) : (
          <div className={styles.favourites__products}>
            {favourites.map((favourite) => (
              <div className={styles.favourites__card} key={favourite.id}>
                <Card
                  phone={favourite}
                  isOrdered={checkInCart(+favourite.id)}
                  isFavourite={checkInFav(+favourite.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
