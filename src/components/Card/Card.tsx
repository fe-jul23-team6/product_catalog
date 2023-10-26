import React from 'react';

import { ButtonType } from 'types';
import { Button } from 'components/UI/Buttons';
import styles from './Card.module.scss';
// import { Phone } from 'types';

// type Props = {
//   phone: Phone,
// };

const phone = {
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: '4.7" IPS',
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'public/img/phones/apple-iphone-7/black/00.jpg',
};

// export const Card: React.FC<Props> = ({ phone }) => {
export const Card: React.FC = () => {
  return (
    <section className={styles.card}>
      <img
        className={styles.card__img}
        src={phone.image}
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
