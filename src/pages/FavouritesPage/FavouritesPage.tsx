import { useState, useEffect, useContext } from 'react';

import {
  Card,
  Loader,
  PageTitle,
  Breadcrumbs,
} from 'components';
import { MESSAGES } from 'utils';
import { ProductsContext } from 'context';
import { getPhonesByIds } from 'services';

import { Phone } from 'types';

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
          <Breadcrumbs />
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
