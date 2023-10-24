import { NavLink } from 'react-router-dom';

export const Topbar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__left">
        <a
          href="#"
          className="top-bar__logo"
        >
          <img
            className="top-bar__logo-size"
            src="../../assets/img/logo.svg"
            alt="Nice Gadgets logo"
          />
        </a>

        <nav className="top-bar__menu">
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

      <div className="top-bar__icons">
        <div className="phony-block">
          <a
            href="tel:+1 234 5555-55-55"
            className="pop-up-phone-number"
          >
            +1 234 5555-55-55
          </a>

          <a
            href="tel:+1 234 5555-55-55"
            className="icon icon--phone"
          >
          </a>
        </div>

        <a
          href="#menu"
          className="icon icon--menu"
        >
        </a>
      </div>
    </div>
  );
};
