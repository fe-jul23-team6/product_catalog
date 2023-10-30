import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { PageTitle } from 'components/PageTitle';
import { Button } from 'components/UI/Buttons';

import {
  getPhones,
  getTablets,
  getAccessories,
} from 'services/products.service';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [phonesCount, setPhonesCount] = useState(0);
  const [tabletsCount, setTabletsCount] = useState(0);
  const [accessoriesCount, setAccessoriesCount] = useState(0);

  useEffect(() => {
    getPhones()
      .then((phonesFromServer) => {
        setPhonesCount(phonesFromServer.length);
      });

    getTablets()
      .then((tabletsFromServer) => {
        setTabletsCount(tabletsFromServer.length);
      });

    getAccessories()
      .then((accessoriesFromServer) => {
        setAccessoriesCount(accessoriesFromServer.length);
      });
  }, []);

  getPhones()
    .then((phonesFromServer) => {
      return phonesFromServer.length;
    });

  // const phonesCount = 95;
  // const tabletsCount = 24;
  // const accessoriesCount = 100;

  return (
    <div className={styles.home}>
      <h1 className={styles['home__visually-hidden']}>Product Catalog</h1>

      <PageTitle
        title="Welcome to Nice Gadgets store!"
      />

      <div className={styles['home__slider-available']}>
        {}
      </div>

      <div className={styles.home__subheader}>
        <h2 className={styles.home__subtitle}>
          Brand new models
        </h2>

        <div className={styles['home__newmodels-btn-container']}>
          <Button
            chevronButtonType="left"
            btnType="Slider"
            shevron
            isDisabled
          />

          <Button
            chevronButtonType="right"
            btnType="Slider"
            shevron
            isDisabled
          />
        </div>
      </div>

      <div className={styles['home__slider-newmodels']}>
        {}
      </div>

      <div className={styles.home__subheader}>
        <h2 className={styles.home__subtitle}>
          Shop by category
        </h2>
      </div>

      <div className={styles.home__categories}>
        <div className={styles['home__category-item']}>
          <div className={`${styles['home__img-container']} ${styles['phone-bg']}`}>
            <Link
              to="/phones"
              className={`${styles['home__item-img']} ${styles['phone-img']}`}
            />
          </div>

          <h3 className={styles['home__item-title']}>Mobile phones</h3>

          <p className={styles['home__item-count']}>{`${phonesCount} models`}</p>
        </div>

        <div className={styles['home__category-item']}>
          <div className={`${styles['home__img-container']} ${styles['tablet-bg']}`}>
            <Link
              to="/tablets"
              className={`${styles['home__item-img']} ${styles['tablet-img']}`}
            />
          </div>

          <h3 className={styles['home__item-title']}>Tablets</h3>

          <p className={styles['home__item-count']}>{`${tabletsCount} models`}</p>
        </div>

        <div className={styles['home__category-item']}>
          <div className={`${styles['home__img-container']} ${styles['accessory-bg']}`}>
            <Link
              to="/tablets"
              className={`${styles['home__item-img']} ${styles['accessory-img']}`}
            />
          </div>

          <h3 className={styles['home__item-title']}>Accessories</h3>

          <p className={styles['home__item-count']}>{`${accessoriesCount} models`}</p>
        </div>
      </div>

      <div className={styles.home__subheader}>
        <h2 className={styles.home__subtitle}>
          Hot prices
        </h2>

        <div className={styles['home__newmodels-btn-container']}>
          <Button
            chevronButtonType="left"
            btnType="Slider"
            shevron
            isDisabled
          />

          <Button
            chevronButtonType="right"
            btnType="Slider"
            shevron
            isDisabled
          />
        </div>
      </div>

      <div className={styles['home__slider-hotprices']}>
        {}
      </div>
    </div>
  );
};
