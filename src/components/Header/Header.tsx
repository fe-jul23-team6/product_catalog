import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { BurgerMenu } from 'components';
import { ProductsContext } from 'context';

import logo from 'assets/img/logo.svg';
import { ReactComponent as Heart }
  from 'assets/img/icons/favourites-default_icon.svg';
import { ReactComponent as Cart }
  from 'assets/img/icons/shopping-bag_icon.svg';
import { ReactComponent as Burger }
  from 'assets/img/icons/menu_icon.svg';

import styles from './Header.module.scss';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const Header: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
    styles['header__menu-link'], {
      [styles['is-active']]: isActive,
    },
  );

  const getIconClass = ({ isActive }: { isActive: boolean }) => classNames(
    styles.header__icon, {
      [styles['header__icon--active']]: isActive,
    },
  );

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  const {
    currentCart,
    currentFavoritesIds,
  } = useContext(ProductsContext);

  const [cartItemCount, setCartItemCount] = useState<number | null>(null);
  const [favItemCount, setFavItemCount] = useState<number | null>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      if (currentCart) {
        const total = currentCart.reduce((acc, item) => acc + item[1], 0);

        setCartItemCount(total);
      }

      if (currentFavoritesIds) {
        const total = currentFavoritesIds.length;

        setFavItemCount(total);
      }
    };

    window.addEventListener('storageChange', handleStorageChange);
    handleStorageChange();

    return () => {
      window.removeEventListener('storageChange', handleStorageChange);
    };
  }, [currentCart, currentFavoritesIds]);

  return (
    isMenuOpen
      ? (
        <BurgerMenu
          setIsMenuOpen={setIsMenuOpen}
        />
      )
      : (
        <header className={styles.header}>
          <div
            className={styles.header__left}
          >
            <NavLink
              to="/"
              className={styles.header__logo}
            >
              <img
                className={styles['header__logo-size']}
                src={logo}
                alt="Nice Gadgets logo"
              />
            </NavLink>

            <nav
              className={styles.header__menu}
            >
              <NavLink
                to="/"
                className={getLinkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/phones"
                className={getLinkClass}
              >
                Phones
              </NavLink>

              <NavLink
                to="/tablets"
                className={getLinkClass}
              >
                Tablets
              </NavLink>

              <NavLink
                to="/accessories"
                className={getLinkClass}
              >
                Accessories
              </NavLink>
            </nav>
          </div>

          <div className={styles.header__icons}>
            <NavLink
              to="/favourites"
              className={getIconClass}

            >
              <Heart />
              { !!favItemCount && (
                <div className={styles['header__icon-count']}>
                  {favItemCount}
                </div>
              ) }
            </NavLink>

            <NavLink
              to="/cart"
              className={getIconClass}
            >
              <Cart />
              { !!cartItemCount && (
                <div className={styles['header__icon-count']}>
                  {cartItemCount}
                </div>
              ) }
            </NavLink>
          </div>

          <div className={styles['header__icons-burger']}>
            <NavLink
              to="#"
              onClick={toggleMenu}
              className={getIconClass}
            >
              <Burger />
            </NavLink>
          </div>
        </header>
      )
  );
};
