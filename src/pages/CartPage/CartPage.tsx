import { useContext, useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import { CartItem, PageTitle, SuccessBuy } from 'components';
import { ProductsContext } from 'context';
import { getPhonesByIds } from 'services';

import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';

import { Phone } from 'types';

import styles from './CartPage.module.scss';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const {
    cartItems,
    currentCart,
    isCartEmpty,
    handleDelete,
    setCartItems,
    setCurrentCart,
    setIsCartEmpty,
    handleCountPlus,
    handleCountMinus,
  } = useContext(ProductsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalAmount = currentCart.reduce((acc, amount) => acc + amount[1], 0);
  const totalCost = cartItems.reduce((acc, phone) => {
    const amount = currentCart.find(phoneId => phoneId[0] === +phone.id) || [0, 0];

    return acc + (phone.price * amount[1]);
  }, 0);

  const loadData = async () => {
    if (!currentCart.length) {
      setCartItems([]);
      setIsCartEmpty(true);

      return;
    }

    const currentCartIds = currentCart.map(item => item[0]);
    const itemsFromServer:Phone[] = await getPhonesByIds(currentCartIds);

    setIsCartEmpty(false);
    setCartItems(itemsFromServer);
  };

  const handleCheckout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setIsModalOpen(true);
    setIsCartEmpty(true);
    setCartItems([]);
    setCurrentCart([]);
    localStorage.setItem('cartItems', '[]');
    window.dispatchEvent(new Event('storageChange'));
  };

  useEffect(() => {
    if (!currentCart.length) {
      setIsCartEmpty(true);
    }
  }, [currentCart.length]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className={`${styles.cart} ${isModalOpen ? styles.blur : ''}`}>
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

        {isCartEmpty
          ? (
            <div className={styles.cart__wrapper}>
              <div className={styles.cart__checkout}>
                <h4 className={styles['cart__title-empty']}>
                  Your cart is empty
                </h4>

                <NavLink
                  to="/"
                  className={styles['cart__go-shopping']}
                >
                  <button
                    type="button"
                    className={styles.cart__buy}
                  >
                    Go Shopping!
                  </button>
                </NavLink>

              </div>
            </div>
          )
          : (
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
          )}
      </div>

      <SuccessBuy setIsOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </>

  );
};
