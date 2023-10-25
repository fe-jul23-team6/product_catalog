import logo from 'assets/img/logo.svg';
import closeIcon from 'assets/img/icons/close_icon.svg';
import favIcon from 'assets/img/icons/favourites-default_icon.svg';
import cartIcon from 'assets/img/icons/shopping-bag_icon.svg';
import './BurgerMenu.scss';
import { NavLink } from 'react-router-dom';

export const BurgerMenu = () => {
  return (
    <aside className="menu" id="menu">
      <div className="menu__content">
        <div className="menu__top-bar top-bar">
          <NavLink className="top-bar__logo-link" to="/">
            <img className="top-bar__logo-img" src={logo} alt="logo" />
          </NavLink>

          <NavLink className="top-bar__close" to="/">
            <img src={closeIcon} alt="close" />
          </NavLink>
        </div>

        <div className="menu__list">
          <div className="menu__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  className="nav__link nav__link--active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  className="nav__link"
                  to="/phones"
                >
                  Phones
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  className="nav__link"
                  to="/tablets"
                >
                  Tablets
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  className="nav__link"
                  to="/accessories"
                >
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="menu__bottom-bar bottom-bar">
          <NavLink
            to="/favorites"
            className="bottom-bar__link"
          >
            <img
              className="bottom-bar__link-img"
              src={favIcon}
              alt="favourites"
            />
          </NavLink>

          <NavLink
            to="/cart"
            className="bottom-bar__link bottom-bar__link--border-left"
          >
            <img
              className="bottom-bar__link-img"
              src={cartIcon}
              alt="cart icon"
            />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
