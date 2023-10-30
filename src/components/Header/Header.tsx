import { useEffect, useState } from 'react';
/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
import { BurgerMenu } from 'components/BurgerMenu';
import logo from 'assets/img/logo.svg';
import classNames from 'classnames';
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

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  const [cartItemCount, setCartItemCount] = useState<number | null>(null);
  const [favItemCount, setFavItemCount] = useState<number | null>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedFavs = localStorage.getItem('favouritesIds');
      const currentFavs: number[][] = storedFavs
        ? JSON.parse(storedFavs)
        : null;

      const storedCart = localStorage.getItem('cartItems');
      const currentCart: number[][] = storedCart
        ? JSON.parse(storedCart)
        : null;

      if (currentCart) {
        const totalItemsInCart = currentCart.reduce((acc, item) => acc + item[1], 0);

        setCartItemCount(totalItemsInCart);
      }

      if (currentFavs) {
        const totalItemsInFavs = currentFavs.length;

        setFavItemCount(totalItemsInFavs);
      }
    };

    window.addEventListener('storageChange', handleStorageChange);
    handleStorageChange();

    return () => {
      window.removeEventListener('storageChange', handleStorageChange);
    };
  }, []);

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
              className={styles.header__icon}
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
              className={styles.header__icon}
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
              className={styles.header__icon}
            >
              <Burger />
            </NavLink>
          </div>
        </header>
      )
  );
};
