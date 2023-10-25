import { NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.svg';
// import { ReactComponent as Heart }
//   from 'assets/img/icons/favourites-default_icon.svg';
import heart from 'assets/img/icons/favourites-default_icon.svg';
import cart from 'assets/img/icons/shopping-bag_icon.svg';
// import { ReactComponent as Cart }
//   from 'assets/img/icons/shopping-bag_icon.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <NavLink
          to="http://localhost:3000/product_catalog#/"
          className="header__logo"
        >
          <img
            className="header__logo-size"
            src={logo}
            alt="Nice Gadgets logo"
          />
        </NavLink>

        <nav className="header__menu">
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

      <div className="header__icons">
        <NavLink
          to="/favourites"
          className="header__icon"
        >
          <img
            src={heart}
            alt="Favourites icon"
          />
        </NavLink>

        <NavLink
          to="/cart"
          className="header__icon"
        >
          <img
            src={cart}
            alt="Shopping Cart"
          />
        </NavLink>
      </div>
    </header>
  );
};
