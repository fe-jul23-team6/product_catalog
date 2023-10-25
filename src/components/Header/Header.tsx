import { NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.svg';
import { ReactComponent as Heart }
  from 'assets/img/icons/favourites-default_icon.svg';
import { ReactComponent as Cart }
  from 'assets/img/icons/shopping-bag_icon.svg';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <NavLink
          to="http://localhost:3000/product_catalog#/"
          className={styles.header__logo}
        >
          <img
            className={styles.header__logo__size}
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
    </header>
  );
};
