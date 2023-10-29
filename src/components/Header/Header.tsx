import { useEffect, useState } from 'react';
/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.svg';
import { ReactComponent as Heart }
  from 'assets/img/icons/favourites-default_icon.svg';
import { ReactComponent as Cart }
  from 'assets/img/icons/shopping-bag_icon.svg';
import { ReactComponent as Burger }
  from 'assets/img/icons/menu_icon.svg';
import styles from './Header.module.scss';

export const Header = () => {
  const [cartItemCount, setCartItemCount] = useState<number | null>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedIdsString = localStorage.getItem('cartItemsIds');
      const storeItemCount: number | null = storedIdsString
        ? JSON.parse(storedIdsString).length
        : null;

      setCartItemCount(storeItemCount);
    };

    window.addEventListener('storageChange', handleStorageChange);
    handleStorageChange();

    return () => {
      window.removeEventListener('storageChange', handleStorageChange);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
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

        <nav className={styles.header__menu}>
          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/phones">
            Phones
          </NavLink>

          <NavLink to="/tablets">
            Tablets
          </NavLink>

          <NavLink to="/accessories">
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
        </NavLink>

        <NavLink
          to="/cart"
          className={styles.header__icon}
        >
          <Cart />
          { !!cartItemCount
          && <div className={styles.header__icon_cartcount}>{cartItemCount}</div> }
        </NavLink>
      </div>

      <div className={styles.header__icons_burger}>
        <NavLink
          to="/menu"
          className={styles.header__icon}
        >
          <Burger />
        </NavLink>
      </div>
    </header>
  );
};
