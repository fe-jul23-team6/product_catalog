import { PageTitle } from 'components/PageTitle';
import styles from './HomePage.module.scss';

export const HomePage = () => (
  <div className={styles.home}>
    <PageTitle
      title="Welcome to Nice Gadgets store!"
    />
  </div>
);
