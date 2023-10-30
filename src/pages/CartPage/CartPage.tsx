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
import { LocalStorageCart } from 'types/LocalStorageCart';
import { CartItem } from '../../components/CartItem';

import styles from './CartPage.module.scss';

// cartPurchases [[id of the phone, amount], ...]

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { cartPhonesIds, setCartPhonesIds } = useContext(CartContext);

  const cartLocalStorage = localStorage.getItem('cartItems');
  const [cartPurchases, setCartPurchases] = useState<LocalStorageCart>(
    cartLocalStorage
      ? JSON.parse(cartLocalStorage)
      : [[0, 0]],
  );

  // const initialIds = cartPurchases.map(item => item[0]);

  const [cartItems, setCartItems] = useState<Phone[]>([]);

  const totalAmount = cartPurchases.reduce((acc, amount) => acc + amount[1], 0);
  const totalCost = cartItems.reduce((acc, phone) => {
    const amount = cartPurchases.find(phoneId => phoneId[0] === +phone.id) || [0, 0];

    return acc + (phone.price * amount[1]);
  }, 0);

  const loadData = async () => {
    if (cartPhonesIds.length === 0) {
      setCartItems([]);

      return;
    }

    const itemsFromServer:Phone[] = await getPhonesByIds(cartPhonesIds);

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

      localStorage.setItem('cartItems', JSON.stringify(updatedLocalStorage));
      window.dispatchEvent(new Event('storageChange'));

      setCartItems(newCartItems);
      setCartPurchases(updatedLocalStorage);

      return newCartItems;
    });
  };

  const handleCountMinus = (id: number) => {
    if (cartPhonesIds.includes(id)) {
      const data = cartPhonesIds.indexOf(id);

      console.log(id);
      console.log(data);
      const dataToSet = cartPhonesIds.filter((item, index) => index !== data);

      console.log(dataToSet);
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

      localStorage.setItem('cartItems', JSON.stringify(copy));
      window.dispatchEvent(new Event('storageChange'));

      return copy;
    });
  };

  const handleCountPlus = (id: number) => {
    setCartPhonesIds(prevIds => [...prevIds, id]);

    setCartPurchases(prevCart => {
      const index = prevCart.findIndex(cartValue => cartValue[0] === id);
      const copy: LocalStorageCart = [...prevCart];

      copy[index][1] += 1;

      localStorage.setItem('cartItems', JSON.stringify(copy));
      window.dispatchEvent(new Event('storageChange'));

      return copy;
    });
  };

  const handleCheckout = () => {
    setCartPhonesIds([]);
    setCartItems([]);
    localStorage.setItem('cartItems', '[]');
    window.dispatchEvent(new Event('storageChange'));
  };

  useEffect(() => {
    loadData();
  }, []);

  // localStorage.setItem('cart', '[[2,2],[15,1],[36,1],[63,1]]');

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
