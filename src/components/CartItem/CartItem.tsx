import { ReactComponent as CloseSvg } from 'assets/img/icons/close_icon.svg';
import { ReactComponent as PlusSvg } from 'assets/img/icons/plus_icon.svg';
import { ReactComponent as MinusSvg } from 'assets/img/icons/minus_icon.svg';
import { useState } from 'react';
import { BASE_URL } from 'utils/fetchProducts';
import { Phone } from 'types';
import styles from './CartItem.module.scss';

type Props = {
  phone: Phone,
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const [count, setCount] = useState(0);

  const substract = (event: React.MouseEvent) => {
    event.preventDefault();
    if (count === 0) {
      return;
    }

    setCount((prevCount) => prevCount - 1);
  };

  const add = (event: React.MouseEvent) => {
    event.preventDefault();
    if (count === 99) {
      return;
    }

    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles['cart-item']}>
      <div className={styles['cart-item__top']}>
        <CloseSvg className={styles['cart-item__remove']} />
        <div className={styles['cart-item__top-container']}>
          <img
            className={styles['cart-item__img']}
            src={`${BASE_URL}/${phone.image}`}
            alt={phone.name}
          />
        </div>
        <h4 className={styles['cart-item__title']}>
          {phone.name}
        </h4>
      </div>

      <div className={styles['cart-item__bottom']}>
        <div className={styles['cart-item__bottom--amount']}>
          <button
            type="button"
            className={`${styles['cart-item__button--disabled']} ${styles['cart-item__button']}`}
            onClick={(event) => {
              substract(event);
            }}
          >
            <MinusSvg />
          </button>

          <span className={styles['cart-item__count']}>
            {count}
          </span>

          <button
            type="button"
            className={styles['cart-item__button']}
            onClick={(event) => {
              add(event);
            }}
          >
            <PlusSvg />
          </button>
        </div>

        <p className={styles['cart-item__price']}>
          $
          {phone.price}
        </p>
      </div>
    </div>
  );
};
