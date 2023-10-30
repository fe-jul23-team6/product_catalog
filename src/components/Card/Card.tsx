/* eslint-disable max-len */
import React, { useState } from 'react';
import { BASE_URL } from 'utils/fetchProducts';
import { Button } from 'components/UI/Buttons';
import { ButtonType, Phone } from 'types';
import styles from './Card.module.scss';

type Props = {
  phone: Phone,
  isOrdered: boolean,
};

export const Card: React.FC<Props> = ({ phone, isOrdered = false }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(isOrdered);

  const toggleItemToCart = () => {
    const storedCart = localStorage.getItem('cartItems');
    const currentCart: number[][] = storedCart
      ? JSON.parse(storedCart)
      : [];

    const itemIndex = currentCart.findIndex(item => item[0] === +phone.id);

    if (itemIndex === -1) {
      currentCart.push([+phone.id, 1]);
      setIsAddedToCart(true);
    } else {
      currentCart.splice(itemIndex, 1);
      setIsAddedToCart(false);
    }

    localStorage.setItem('cartItems', JSON.stringify(currentCart));
    window.dispatchEvent(new Event('storageChange'));
  };

  return (
    <section className={styles.card}>
      <div className={styles.card__container}>
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
      </div>

      <hr className={styles.card__hr} />

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
          onClick={toggleItemToCart}
        />
        <div>
          <Button
            btnType={ButtonType.Favourite}
          />
        </div>
      </div>
    </section>
  );
};
