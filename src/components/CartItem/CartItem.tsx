import { ReactComponent as CloseSvg } from 'assets/img/icons/close_icon.svg';
import { ReactComponent as PlusSvg } from 'assets/img/icons/plus_icon.svg';
import { ReactComponent as MinusSvg } from 'assets/img/icons/minus_icon.svg';
import { BASE_URL } from 'utils/fetchProducts';
import { Phone } from 'types';
import styles from './CartItem.module.scss';

type Props = {
  phone: Phone,
  onDelete: (id: number) => void;
  onCountMinus: (id: number) => void;
  onCountPlus: (id: number) => void;
  count: number;
};

export const CartItem: React.FC<Props> = ({
  phone,
  onDelete,
  onCountMinus,
  onCountPlus,
  count = 0,
}) => {
  return (
    <div className={styles['cart-item']}>
      <div className={styles['cart-item__top']}>
        <button
          type="button"
          className={styles['cart-item__remove-btn']}
          onClick={() => onDelete(+phone.id)}
        >
          <CloseSvg className={styles['cart-item__remove']} />
        </button>
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
            onClick={() => onCountMinus(+phone.id)}
          >
            <MinusSvg />
          </button>

          <span className={styles['cart-item__count']}>
            {count}
          </span>

          <button
            type="button"
            className={styles['cart-item__button']}
            onClick={() => onCountPlus(+phone.id)}
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
