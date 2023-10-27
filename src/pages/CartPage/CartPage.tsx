/* eslint-disable jsx-a11y/control-has-associated-label */
import { Phone } from 'types';
import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../components/CartItem';

import styles from './CartPage.module.scss';

type Props = {
  phone: Phone,
};

export const CartPage: React.FC<Props> = ({ phone }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cart__top}>
        <div className={styles.cart__goback}>
          <button
            type="button"
            className={styles.cart__chevron}
            onClick={goBack}
          >
            <ChevronIcon />
          </button>
          <button
            type="button"
            className={styles.cart__back}
            onClick={goBack}
          >
            Back
          </button>
        </div>

        <h1 className={styles.cart__title}>
          Cart
        </h1>
      </div>

      <div className={styles.cart__wrapper}>
        <div className={styles.cart__content}>
          {[1, 2, 3].map((i) => (
            <div className={styles.cart__item} key={i}>
              <CartItem phone={phone} />
            </div>
          ))}
        </div>

        <div className={styles.cart__checkout}>
          <h2 className={styles.cart__totalPrice}>
            $9999
          </h2>
          <p className={styles.cart__total}>
            Total for 3 items
          </p>

          <button
            className={styles.cart__buy}
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
