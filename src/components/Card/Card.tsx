import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { BASE_URL } from 'utils/fetchProducts';
import { ButtonType, Phone } from 'types';

import { ProductsContext } from 'context';
import { Button } from 'components/UI';

import styles from './Card.module.scss';

type Props = {
  phone: Phone,
  isOrdered: boolean,
  isFavourite: boolean,
};

export const Card: React.FC<Props> = ({
  phone,
  isOrdered = false,
  isFavourite = false,
}) => {
  const [isAddedToCart, setIsAddedToCart] = useState(isOrdered);
  const [isAddedToFav, setIsAddedToFav] = useState(isFavourite);

  const {
    toggleItemToCart,
    toggleItemToFavourites,
    checkInCart,
    checkInFav,
  } = useContext(ProductsContext);

  const handleToggleCart = (id: number) => {
    toggleItemToCart(id);

    setIsAddedToCart(checkInCart(id));
  };

  const handleToggleFav = (id: number) => {
    toggleItemToFavourites(id);

    setIsAddedToFav(checkInFav(id));
  };

  return (
    <section className={styles.card}>
      <NavLink
        to={`/phones/${phone.itemId}`}
        className={styles.card__container}
      >
        <div className={styles['card__img-container']}>
          <img
            className={styles.card__img}
            src={`${BASE_URL}/${phone.image}`}
            alt={phone.name}
          />
        </div>

        <h2 className={styles.card__title}>
          {phone.name}
        </h2>

        <p className={styles.card__price}>
          <span>
            $
            {phone.price}
          </span>
          <span className={styles.card__previous}>
            $
            {phone.fullPrice}
          </span>
        </p>
      </NavLink>

      <div className={styles.card__info}>
        <p className={styles.card__option}>
          <span className={styles.card__parameter}>Screen</span>

          <span>{phone.screen}</span>
        </p>

        <p className={styles.card__option}>
          <span className={styles.card__parameter}>Capacity</span>

          <span>{phone.capacity}</span>
        </p>

        <p className={styles.card__option}>
          <span className={styles.card__parameter}>RAM</span>

          <span>{phone.ram}</span>
        </p>
      </div>

      <div className={styles.card__buttons}>
        <Button
          btnType={ButtonType.Main}
          isActive={isAddedToCart}
          onClick={() => {
            handleToggleCart(+phone.id);
          }}
        />
        <div>
          <Button
            btnType={ButtonType.Favourite}
            isActive={isAddedToFav}
            onClick={() => {
              handleToggleFav(+phone.id);
            }}
          />
        </div>
      </div>
    </section>
  );
};
