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
    const storedIdsString = localStorage.getItem('cartItemsIds');
    const storedIds: string[] = storedIdsString
      ? JSON.parse(storedIdsString)
      : [];

    if (!storedIds.includes(phone.id)) {
      storedIds.push(phone.id);
      setIsAddedToCart(true);
    } else {
      const index = storedIds.indexOf(phone.id);

      storedIds.splice(index, 1);
      setIsAddedToCart(false);
    }

    localStorage.setItem('cartItemsIds', JSON.stringify(storedIds));
    window.dispatchEvent(new Event('storageChange'));
  };

  return (
    <section className={styles.card}>
      <img
        className={styles.card__img}
        src={`${BASE_URL}/${phone.image}`}
        alt={phone.name}
      />

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
