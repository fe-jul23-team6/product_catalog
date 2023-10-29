/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useEffect, useState } from 'react';
import { PageTitle } from 'components/PageTitle';
import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';
import { useNavigate } from 'react-router-dom';
import { CartContext } from 'context/CartContext';
import { Phone } from 'types';
import { getPhonesByIds } from 'services/products.service';
import { CartItem } from '../../components/CartItem';

import styles from './CartPage.module.scss';

type LocalStorageCart = [number, number][];
// cartPurchases [[id of the phone, amount], ...]

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { cartPhonesIds, setCartPhonesIds } = useContext(CartContext);

  const cartLocalStorage = localStorage.getItem('cart');
  const [cartPurchases, setCartPurchases] = useState<LocalStorageCart>(
    cartLocalStorage
      ? JSON.parse(cartLocalStorage)
      : [[0, 0]],
  );

  // all ids of the phones from locale storage, that are in the cart
  const cartItemsIds = cartPurchases.map(purchase => purchase[0]);
  const [cartItems, setCartItems] = useState<Phone[]>([]);

  const totalAmount = cartPurchases.reduce((acc, amount) => acc + amount[1], 0);
  const totalCost = cartItems.reduce((acc, phone) => {
    const amount = cartPurchases.find(phoneId => phoneId[0] === +phone.id) || [0, 0];

    return acc + (phone.price * amount[1]);
  }, 0);

  // отримуємо телефони з сервера за адресою адреса/products?ids=1,2,3
  const loadData = async () => {
    if (cartItemsIds.length === 0) {
      setCartItems([]);

      return;
    }

    const itemsFromServer:Phone[] = await getPhonesByIds(cartItemsIds);

    setCartItems(itemsFromServer);
  };

  const handleDelete = (id: number) => {
    if (cartPhonesIds.includes(id)) {
      const data = cartPhonesIds.filter(item => item !== id);

      setCartPhonesIds([...data]);
    }

    setCartItems(currItems => {
      const newCartItems = currItems.filter(currItem => +currItem.id !== id);
      const updatedLocalStorage: LocalStorageCart = cartPurchases
        .filter(val => val[0] !== id);

      localStorage.setItem('cart', JSON.stringify(updatedLocalStorage));

      setCartItems(newCartItems);
      setCartPurchases(updatedLocalStorage);

      return newCartItems;
    });
  };

  const handleCountMinus = (id: number) => {
    if (cartPhonesIds.includes(id)) {
      const data = cartPhonesIds.indexOf(id);
      const dataToSet = cartPhonesIds.filter((item, index) => index !== data);

      setCartPhonesIds([...dataToSet]);
    }

    setCartPurchases(prevCart => {
      const index = prevCart.findIndex(cartValue => cartValue[0] === id);
      const copy: LocalStorageCart = [...prevCart];

      copy[index][1] -= 1;
      if (copy[index][1] === 0) {
        copy.splice(index, 1);

        setCartItems(prevCartItems => prevCartItems
          .filter(item => +item.id !== id));
      }

      localStorage.setItem('cart', JSON.stringify(copy));

      return copy;
    });
  };

  const handleCountPlus = (id: number) => {
    setCartPhonesIds(prevIds => [...prevIds, id]);

    setCartPurchases(prevCart => {
      const index = prevCart.findIndex(cartValue => cartValue[0] === id);
      const copy: LocalStorageCart = [...prevCart];

      copy[index][1] += 1;

      localStorage.setItem('cart', JSON.stringify(copy));

      return copy;
    });
  };

  const handleCheckout = () => {
    setCartPhonesIds([]);
    setCartItems([]);
    localStorage.setItem('cart', '[]');
  };

  useEffect(() => {
    loadData();
  }, []);

  // localStorage.setItem('cart', '[[1,1],[2,1],[3,1],[25,1]]');

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
            const currCount = cartPurchases.find(item => item[0] === +phone.id);
            const count = currCount ? currCount[1] : 0;

            return (
              <div className={styles.cart__item}>
                <CartItem
                  key={phone.id}
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
