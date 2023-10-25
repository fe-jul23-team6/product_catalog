/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoSvg } from 'assets/img/logo.svg';
import { ReactComponent as ArrowSvg } from 'assets/img/icons/chevron-up_icon.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <NavLink to="/">
          <LogoSvg />
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
          to="/rights"
          className={styles.nav__link}
        >
          Rights
        </NavLink>
      </div>
      <div className={`${styles.footer__scroll} ${styles.scroll}`}>
        <NavLink
          id="scroll_top"
          to="#"
          onClick={scrollToTop}
          className={styles.scroll__link}
        >
          <span className={styles.scroll__label}>
            Back to top
          </span>
          <div className={styles.scroll__block}>
            <ArrowSvg className={styles.scroll__img} />
          </div>
        </NavLink>
      </div>
    </footer>
  );
};
