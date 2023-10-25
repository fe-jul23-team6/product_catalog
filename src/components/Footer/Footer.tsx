import React from 'react';
import './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import arrow from '../../assets/img/icons/chevron-up_icon.svg';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer__logo">
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo Nice Gadgets"
          />
        </NavLink>
      </div>
      <div className="footer__nav nav">
        <NavLink
          to="https://github.com/fe-jul23-team6/product_catalog"
          className="nav__link"
        >
          Github
        </NavLink>
        <NavLink
          to="/contacts"
          className="nav__link"
        >
          Contacts
        </NavLink>
        <NavLink
          to="/rights"
          className="nav__link"
        >
          Rights
        </NavLink>
      </div>
      <div className="footer__scroll scroll">
        <NavLink
          id="scroll_top"
          to="#"
          onClick={scrollToTop}
          className="scroll__link"
        >
          <span className="scroll__label">
            Back to top
          </span>
          <div className="scroll__block">
            <img src={arrow} alt="arrow" className="scroll__img" />
          </div>
        </NavLink>
      </div>
    </footer>
  );
};
