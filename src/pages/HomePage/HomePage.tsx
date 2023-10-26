import styles from '../../components/Header/Header.module.scss';

export const HomePage = () => (
  <div className={styles.home}>
    <h1
      className={styles.home__title}
    >
      Welcome to Nice Gadgets store!
    </h1>
  </div>
);
