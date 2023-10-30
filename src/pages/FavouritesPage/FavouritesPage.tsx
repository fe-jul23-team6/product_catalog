import { PageTitle } from 'components/PageTitle';
import { useState, useEffect } from 'react';
import { Loader } from 'components/UI/Loader';
import { Phone } from 'types';
import { getPhonesByIds } from 'services/products.service';
import { Card } from 'components/Card';
import { PageLocation } from 'components/UI/PageLocation';
import styles from './FavouritesPage.module.scss';

export const FavouritesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const storedFavourites = localStorage.getItem('favouritesIds');
  const currentFavorites: number[] = JSON.parse(storedFavourites || '[]');
  const [favourites, setFavourites] = useState<Phone[]>([]);

  // make one to check in local storage, add props
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

  const loadData = async () => {
    if (currentFavorites.length === 0) {
      return;
    }

    setIsLoading(true);
    const favData = await getPhonesByIds(currentFavorites);

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
