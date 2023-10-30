import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { getPhones } from 'services/products.service';
import { PageTitle } from 'components/PageTitle';
import { SliderSmall } from 'components/SliderSmall';
import { Button } from 'components/UI/Buttons';
import iPhone14Pro from 'assets/img/banner-dark.png';
import iPhones from 'assets/img/banner-phones-dark.png';
import iTabs from 'assets/img/banner-tablets-dark.jpg';
import Accessories from 'assets/img/banner-accessories-dark.png';
import { Phone } from 'types';
import styles from './HomePage.module.scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';

export const HomePage = () => {
  const [newModels, setNewModels] = useState<Phone[]>([]);
  const [mostReducedModels, setMostReducedModels] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const phonesCount = 95;
  const tabletsCount = 24;
  const accessoriesCount = 100;

  useEffect(() => {
    setIsLoading(true);

    getPhones()
      .then((phonesFromServer) => {
        const newPhones = phonesFromServer.filter(({ year }) => year === 2022);
        const mostReducedPhones = phonesFromServer.filter(
          ({ fullPrice, price }) => (fullPrice - price) >= 100,
        );

        setNewModels(newPhones);
        setMostReducedModels(mostReducedPhones);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.home}>
      <h1 className={styles['home__visually-hidden']}>Product Catalog</h1>

      <PageTitle
        title="Welcome to Nice Gadgets store!"
      />

      <section className={styles.home__sliderBig}>
        <div className="button-prev">
          <Button
            btnType="Slider"
            chevronButtonType="left"
            shevron
          />
        </div>

        <Swiper
          loop
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: '.button-prev',
            nextEl: '.button-next',
          }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img
              src={iPhone14Pro}
              alt="iPhone 14 Pro"
              className={styles['header__logo-size']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={iPhones}
              alt="iPhones"
              className={styles['header__logo-size']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={iTabs}
              alt="iTabs"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Accessories}
              alt="Apple Accessories"
            />
          </SwiperSlide>
        </Swiper>

        <div className="button-next">
          <Button
            btnType="Slider"
            chevronButtonType="right"
            shevron
          />
        </div>
      </section>

      <SliderSmall
        selectedPhones={newModels}
        isLoading={isLoading}
        hasError={hasError}
        headerTitle="Brand new models"
        moverClass="new"
      />

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

      <SliderSmall
        selectedPhones={mostReducedModels}
        isLoading={isLoading}
        hasError={hasError}
        headerTitle="Hot prices"
        moverClass="hot"
      />
    </div>
  );
};
