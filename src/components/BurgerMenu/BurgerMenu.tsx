/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.svg';
import { ReactComponent as CloseSvg }
  from 'assets/img/icons/close_icon.svg';
import { ReactComponent as FavSvg }
  from 'assets/img/icons/favourites-default_icon.svg';
import { ReactComponent as CartSvg }
  from 'assets/img/icons/shopping-bag_icon.svg';
import styles from './BurgerMenu.module.scss';

type Props = {
  setMenuIsOpen: (menuIsOpen: boolean) => void;
};

export const BurgerMenu: FC<Props> = ({ setMenuIsOpen }) => {
  const toggleMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <aside
      onClick={toggleMenu}
      className={styles.menu}
    >
      <div className={styles.menu__content}>
        <div className={`${styles['menu__top-bar']} ${styles['top-bar']}`}>
          <NavLink
            to="/"
            className={styles['top-bar__logo-link']}
          >
            <img
              src={logo}
              className={styles['top-bar__logo-img']}
              alt="logo"
            />
          </NavLink>

          <NavLink
            to="#"
            className={styles['top-bar__close']}
          >
            <CloseSvg />
          </NavLink>
        </div>

        <div className={styles.menu__list}>
          <div className={styles.menu__nav}>
            <ul
              className={styles.nav__list}
            >
              <li className={styles.nav__item}>
                <NavLink
                  className={`${styles.nav__link} ${styles['nav__link--active']}`}
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className={styles.nav__item}>
                <NavLink className={styles.nav__link} to="/phones">
                  Phones
                </NavLink>
              </li>

              <li className={styles.nav__item}>
                <NavLink className={styles.nav__link} to="/tablets">
                  Tablets
                </NavLink>
              </li>

              <li className={styles.nav__item}>
                <NavLink className={styles.nav__link} to="/accessories">
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={styles['menu__bottom-bar']}
        >
          <NavLink to="/favourites" className={styles['bottom-bar__link']}>
            <FavSvg className={styles['bottom-bar__link-img']} />
          </NavLink>

          <NavLink
            to="/cart"
            className={`${styles['bottom-bar__link']} ${styles['bottom-bar__link--border-left']}`}
          >
            <CartSvg className={styles['bottom-bar__link-img']} />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
