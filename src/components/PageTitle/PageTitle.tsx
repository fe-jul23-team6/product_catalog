import { FC } from 'react';
import styles from './PageTitle.module.scss';

type Props = {
  title: string;
};

export const PageTitle: FC<Props> = ({ title }) => (
  <div className={styles.pageTitle}>
    <h1
      className={styles.pageTitle__header}
    >
      {title}
    </h1>
  </div>
);
