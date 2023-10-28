/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from 'react';
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
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

export const Header: FC<Props> = ({ menuIsOpen, setMenuIsOpen }) => {
  const [activeItem, setActiveItem] = useState(0);

  const toggleMenu = () => {
    setMenuIsOpen(true);
  };

  const handleIsActive = (index: number) => {
    setActiveItem(index);
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
                className={classNames(styles.header__menu_link, {
                  isActive: activeItem === 0,
                })}
                onClick={() => handleIsActive(0)}
              >
                Home
              </NavLink>

              <NavLink
                to="/phones"
                className={classNames(styles.header__menu_link, {
                  isActive: activeItem === 1,
                })}
                onClick={() => handleIsActive(1)}
              >
                Phones
              </NavLink>

              <NavLink
                to="/tablets"
                className={classNames(styles.header__menu_link, {
                  isActive: activeItem === 2,
                })}
                onClick={() => handleIsActive(2)}
              >
                Tablets
              </NavLink>

              <NavLink
                to="/accessories"
                className={classNames(styles.header__menu_link, {
                  isActive: activeItem === 3,
                })}
                onClick={() => handleIsActive(3)}
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
