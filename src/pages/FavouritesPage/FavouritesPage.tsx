import { PageTitle } from 'components/PageTitle';
import { useState, useEffect, useContext } from 'react';
import { Loader } from 'components/UI/Loader';
import { Phone } from 'types';
import { getPhonesByIds } from 'services/products.service';
import { Card } from 'components/Card';
import { PageLocation } from 'components/UI/PageLocation';
import { ProductsContext } from 'context/ProductsContext';
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
    if (currentFavoritesIds.length === 0) {
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

          <p className={styles['items-on-page']}>
            {`${favourites.length} items`}
          </p>
        </div>

        {isLoading ? (
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
