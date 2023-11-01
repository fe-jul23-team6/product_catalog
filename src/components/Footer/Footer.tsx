/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';

import logo from 'assets/img/logo.svg';
import { ReactComponent as ArrowSvg } from 'assets/img/icons/chevron-up_icon.svg';
import { BackToTopArrow } from 'components/BackToTopArrow';
import styles from './Footer.module.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <NavLink to="/">
          <img
            src={logo}
            className={styles['footer__logo-img']}
            alt="logo"
          />
        </NavLink>
      </div>
      <div className={`${styles.footer__nav} ${styles.nav}`}>
        <NavLink
          to="https://github.com/fe-jul23-team6/product_catalog"
          className={styles.nav__link}
        >
          Github
        </NavLink>
        <NavLink
          to="/contacts"
          className={styles.nav__link}
        >
          Contacts
        </NavLink>
        <NavLink
          to="https://www.president.gov.ua/ua/documents/constitution/konstituciya-ukrayini-rozdil-ii"
          className={styles.nav__link}
        >
          Rights
        </NavLink>
      </div>

      <BackToTopArrow />

      <div className={styles.footer__scroll}>
        <NavLink
          to="#"
          onClick={scrollToTop}
          className={styles.footer__scroll_link}
        >
          <span className={styles.footer__scroll_label}>
            Back to top
          </span>
          <div className={styles.footer__scroll_block}>
            <ArrowSvg className={styles.footer__scroll_img} />
          </div>
        </NavLink>
      </div>
    </footer>
  );
};
