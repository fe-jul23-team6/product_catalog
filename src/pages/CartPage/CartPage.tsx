/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useEffect } from 'react';
import { PageTitle } from 'components/PageTitle';
import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'types';
import { getPhonesByIds } from 'services/products.service';
import { ProductsContext } from 'context/ProductsContext';
import { CartItem } from '../../components/CartItem';

import styles from './CartPage.module.scss';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const {
    currentCart,
    cartItemsIds,
    setCartItemsIds,
    cartItems,
    setCartItems,
    handleDelete,
    handleCountMinus,
    handleCountPlus,
  } = useContext(ProductsContext);

  const totalAmount = currentCart.reduce((acc, amount) => acc + amount[1], 0);
  const totalCost = cartItems.reduce((acc, phone) => {
    const amount = currentCart.find(phoneId => phoneId[0] === +phone.id) || [0, 0];

    return acc + (phone.price * amount[1]);
  }, 0);

  const loadData = async () => {
    if (cartItemsIds.length === 0) {
      setCartItems([]);

      return;
    }

    const itemsFromServer:Phone[] = await getPhonesByIds(cartItemsIds);

    setCartItems(itemsFromServer);
  };

  const handleCheckout = () => {
    setCartItemsIds([]);
    setCartItems([]);
    localStorage.setItem('cartItems', '[]');
    window.dispatchEvent(new Event('storageChange'));
  };

  useEffect(() => {
    loadData();
  }, []);

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

        <PageTitle title="Cart" />
      </div>

      <div className={styles.cart__wrapper}>
        <div className={styles.cart__content}>
          {cartItems.map(phone => {
            const currCount = currentCart.find(item => item[0] === +phone.id);
            const count = currCount ? currCount[1] : 0;

            return (
              <div
                className={styles.cart__item}
                key={phone.id}
              >
                <CartItem
                  phone={phone}
                  onDelete={handleDelete}
                  count={count}
                  onCountMinus={handleCountMinus}
                  onCountPlus={handleCountPlus}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.cart__checkout}>
          <h2 className={styles.cart__totalPrice}>
            $
            {totalCost}
          </h2>
          <p className={styles.cart__total}>
            {`Total for ${totalAmount} items`}
          </p>

          <button
            className={styles.cart__buy}
            type="button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
