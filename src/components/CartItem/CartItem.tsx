import { ReactComponent as CloseSvg } from 'assets/img/icons/close_icon.svg';
import './CartItem.scss';
import { ReactComponent as PlusSvg } from 'assets/img/icons/plus_icon.svg';
import { ReactComponent as MinusSvg } from 'assets/img/icons/minus_icon.svg';
import { useState } from 'react';
import { BASE_URL } from 'utils/fetchProducts';

export const CartItem = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="cart-item">
      <div className="cart-item__top">
        <CloseSvg className="cart-item__remove" />
        <div className="cart-item__top-container">
          <img
            className="cart-item__img"
            src={`${BASE_URL}/img/phones/apple-iphone-11-pro/gold/01.jpg`}
            alt="product"
          />
        </div>
        <h4 className="cart-item__title">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9GFS/A)
        </h4>
      </div>

      <div className="cart-item__bottom">
        <div className="cart-item__bottom--left">
          <button
            type="button"
            className="cart-item__button"
            onClick={(event) => {
              event.preventDefault();
              setCount((prevCount) => prevCount - 1);
            }}
          >
            <MinusSvg />
          </button>

          <span>
            {count}
          </span>

          <button
            type="button"
            className="cart-item__button"
            onClick={(event) => {
              event.preventDefault();
              setCount((prevCount) => prevCount + 1);
            }}
          >
            <PlusSvg />
          </button>
        </div>

        <p className="cart-item__price">$1099</p>
      </div>
    </div>
  );
};
