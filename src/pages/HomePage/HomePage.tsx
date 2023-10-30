import { PageTitle } from 'components/PageTitle';
import { Button } from 'components/UI/Buttons';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const phonesCount = 95;
  const tabletsCount = 24;
  const accessoriesCount = 100;

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
            <div className={`${styles['home__item-img']} ${styles['phone-img']}`} />
          </div>

          <h3 className={styles['home__item-title']}>Mobile phones</h3>

          <p className={styles['home__item-count']}>{`${phonesCount} models`}</p>
        </div>

        <div className={styles['home__category-item']}>
          <div className={`${styles['home__img-container']} ${styles['tablet-bg']}`}>
            <div className={`${styles['home__item-img']} ${styles['tablet-img']}`} />
          </div>

          <h3 className={styles['home__item-title']}>Tablets</h3>

          <p className={styles['home__item-count']}>{`${tabletsCount} models`}</p>
        </div>

        <div className={styles['home__category-item']}>
          <div className={`${styles['home__img-container']} ${styles['accessory-bg']}`}>
            <div className={`${styles['home__item-img']} ${styles['accessory-img']}`} />
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
