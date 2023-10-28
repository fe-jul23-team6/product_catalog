/* eslint-disable max-len */
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { BurgerMenu } from 'components/BurgerMenu';
import logo from 'assets/img/logo.svg';
import { ReactComponent as Heart }
  from 'assets/img/icons/favourites-default_icon.svg';
import { ReactComponent as Cart }
  from 'assets/img/icons/shopping-bag_icon.svg';
import { ReactComponent as Burger }
  from 'assets/img/icons/menu_icon.svg';
import styles from './Header.module.scss';

type Props = {
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

export const Header: FC<Props> = ({ menuIsOpen, setMenuIsOpen }) => {
  const toggleMenu = () => {
    setMenuIsOpen(true);
  };

  return (
    menuIsOpen
      ? (
        <BurgerMenu
          setMenuIsOpen={setMenuIsOpen}
        />
      )
      : (
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
            </NavLink>
          </div>

          <div className={styles.header__icons_burger}>
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
