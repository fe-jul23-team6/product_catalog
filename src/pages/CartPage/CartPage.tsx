/* eslint-disable jsx-a11y/control-has-associated-label */
import { Phone } from 'types';
import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../components/CartItem';

import './CartPage.scss';

type Props = {
  phone: Phone,
};

export const CartPage: React.FC<Props> = ({ phone }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="cart">
      <div className="cart__top">
        <div className="cart__goback">
          <button
            type="button"
            className="cart__shevron"
            onClick={goBack}
          >
            <ChevronIcon />
          </button>
          <button
            type="button"
            className="cart__back"
            onClick={goBack}
          >
            Back
          </button>
        </div>

        <h1 className="cart__title">
          Cart
        </h1>
      </div>

      <div className="cart__wrapper">
        <div className="cart__content">
          {[1, 2, 3].map((i) => (
            <div className="cart__item">
              <CartItem key={i} phone={phone} />
            </div>
          ))}
        </div>

        <div className="cart__checkout">
          <h2 className="cart__total-price">
            $9999
          </h2>
          <p className="cart__total">
            Total for 3 items
          </p>

          <button
            className="cart__buy"
            type="button"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
