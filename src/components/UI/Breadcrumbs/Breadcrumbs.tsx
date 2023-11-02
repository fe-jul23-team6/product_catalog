/* eslint-disable react/require-default-props */
import React, { useContext } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { ReactComponent as HomeIcon }
  from 'assets/img/icons/home_icon.svg';
import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';
import { ProductsContext } from 'context';

import styles from './Breadcrumbs.module.scss';

const paths = [
  { label: 'Phones', url: '/phones' },
  { label: 'Tablets', url: '/tablets' },
  { label: 'Accessories', url: '/accessories' },
  { label: 'Contacts', url: '/contacts' },
  { label: 'Favourites', url: '/favourites' },

];

export const Breadcrumbs: React.FC = () => {
  const {
    currentProductName,
  } = useContext(ProductsContext);

  const { productId } = useParams();

  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className={styles.location}>
      <div className={styles['location__icon-home']}>
        <Link to="/home" className={styles['location__icon-home-link']}>
          <HomeIcon />
        </Link>
      </div>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        let linkName = paths.find(x => x.url === routeTo)?.label || name;

        if (productId && routeTo.indexOf(productId) > 0) {
          console.log(routeTo, productId);
          linkName = currentProductName;
        }

        return (
          <>
            <div className={styles['location__icon-chevron']}>
              <ChevronIcon />
            </div>

            <div className={`${styles['location__selected-page']} ${styles['selected-page']}`}>
              <Link to={routeTo} className={styles['selected-page__paragraph']}>
                {linkName}
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};
