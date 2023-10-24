import React from 'react';
import './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import arrow from '../../assets/img/icons/chevron-up_icon.svg';

export const Footer = () => {
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
        <span className="scroll__label">
          Back to top
        </span>
        <a
          id="scroll_top"
          href="#header"
          className="scroll__link"
        >
          <img src={arrow} alt="arrow" className="scroll__img" />
        </a>
      </div>
    </footer>
  );
};
