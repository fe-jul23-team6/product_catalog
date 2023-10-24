import React from 'react';
import './BurgerMenu.module.scss';

// import logo from '../../assets/img/logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/img/icons/close_icon.svg';
import { ReactComponent as LogoIcon } from '../../assets/img/logo.svg';
import { ReactComponent as FavIcon } from '../../assets/img/icons/favourites-default_icon.svg';
import { ReactComponent as ShoppingBagIcon } from '../../assets/img/icons/shopping-bag_icon.svg';

export const BurgerMenu = () => {
  return (
    <aside className='menu' id="menu">
      <div className='menu__content'>
        <div className='menu__top top-bar'>
          <a className='top-bar__logo-link' href="#">
            {/* <img src='../../assets/img/logo.svg' alt="logo" /> */}
            {/* <img src={logo} alt="logo" /> */}
            <LogoIcon />
          </a>

          <a className='top-bar__close' href="#">
            <CloseIcon />
          </a>
        </div>

        <div className='menu__list'>
          <div className='menu__nav nav'>
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#">Home</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="#">Phones</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="#">Tablets</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="#">Accessories</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='menu__bottom'>
          <div className="bottom-bar">
            <div>
              <a href="#" className="bottom-bar__favourites">
                <FavIcon />
              </a>
            </div>

            <div>
              <a href="#" className="bottom-bar__cart">
              <ShoppingBagIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
