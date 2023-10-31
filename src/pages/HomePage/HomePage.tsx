import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getDiscountedPhones, getNewestPhones } from 'services/products.service';
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

  const pagination = {
    clickable: true,
  };

  useEffect(() => {
    setIsLoading(true);
    getNewestPhones()
      .then((newPhones) => {
        setNewModels(newPhones);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getDiscountedPhones()
      .then((mostReducedPhones) => {
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
        <div className={styles.home__navButton}>
          <div className="button-prev">
            <Button
              btnType="Slider"
              chevronButtonType="left"
              shevron
              high
            />
          </div>
        </div>

        <Swiper
          loop
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={pagination}
          navigation={{
            prevEl: '.button-prev',
            nextEl: '.button-next',
          }}
          slidesPerView={1}
          className={styles['home__slide-width']}
        >
          <SwiperSlide>
            <img
              width="100%"
              src={iPhone14Pro}
              alt="iPhone 14 Pro"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              width="100%"
              src={iPhones}
              alt="iPhones"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              width="100%"
              src={iTabs}
              alt="iTabs"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              width="100%"
              src={Accessories}
              alt="Apple Accessories"
            />
          </SwiperSlide>
        </Swiper>

        <div className={styles.home__navButton}>
          <div className="button-next">
            <Button
              btnType="Slider"
              chevronButtonType="right"
              shevron
              high
            />
          </div>
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
