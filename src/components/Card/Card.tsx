import React from 'react';

import { Button } from 'components/UI/Buttons';
import { ButtonType, Phone } from 'types';
import styles from './Card.module.scss';

type Props = {
  phone: Phone,
};

export const Card: React.FC<Props> = ({ phone }) => {
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
