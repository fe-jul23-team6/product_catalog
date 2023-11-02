import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ArrowSvg } from 'assets/img/icons/chevron-up_icon.svg';
import styles from './BackToTopArrow.module.scss';

export const BackToTopArrow = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;

    const documentHeight = document.documentElement.scrollHeight;

    const scrollPosition = (documentHeight - windowHeight - window.scrollY) >= 100;

    if (window.scrollY > 100 && scrollPosition) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.backToTopArrow} ${styles[`${scrolling ? 'scrolling' : ''}`]}`}>
      <NavLink
        to="#"
        onClick={scrollToTop}
      >
        <div className={styles.backToTopArrow__block}>
          <ArrowSvg className={styles.backToTopArrow__img} />
        </div>
      </NavLink>
    </div>
  );
};
