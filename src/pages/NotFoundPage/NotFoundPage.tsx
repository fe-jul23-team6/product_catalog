import { NavLink } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
  <div className={styles.pageNotFound}>
    <div className={styles.pageNotFound__textblock}>
      <h1 className={styles.pageNotFound__title}>Page not found</h1>

      <p className={styles.pageNotFound__text}>
        We can’t find the page you’re looking for.
        You can start over from the&nbsp;
        <NavLink
          to="/"
          className={styles.pageNotFound__text_link}
        >
          home page
        </NavLink>
        . If you feel you need our help, don&apos;t hesitate to&nbsp;
        <NavLink
          to="/contacts"
          className={styles.pageNotFound__text_link}
        >
          contact us
        </NavLink>
        !
      </p>
    </div>
  </div>
);
