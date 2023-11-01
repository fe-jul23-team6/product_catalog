import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { PageTitle } from 'components/PageTitle';
import { SliderSmall } from 'components/SliderSmall';
import { Button } from 'components/UI/Buttons';
import { LONG_BANNERS, SQUARE_BANNERS } from 'utils/constants';
import { useWindowWidth } from 'utils/useWindowWidth';
import { Phone } from 'types';
import {
  getPhones,
  getTablets,
  getAccessories,
  getNewestPhones,
  getDiscountedPhones,
} from 'services/products.service';
import styles from './HomePage.module.scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';

export const HomePage = () => {
  const [phonesCount, setPhonesCount] = useState(0);
  const [tabletsCount, setTabletsCount] = useState(0);
  const [accessoriesCount, setAccessoriesCount] = useState(0);

  const [newModels, setNewModels] = useState<Phone[]>([]);
  const [mostReducedModels, setMostReducedModels] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const bannerSource = useWindowWidth() < 640 ? SQUARE_BANNERS : LONG_BANNERS;

  const imageUrl1 = bannerSource.slide1;
  const imageUrl2 = bannerSource.slide2;
  const imageUrl3 = bannerSource.slide3;
  const imageUrl4 = bannerSource.slide4;

  useEffect(() => {
    getPhones()
      .then((phonesFromServer) => {
        setPhonesCount(phonesFromServer.count);
      });

    getTablets()
      .then((tabletsFromServer) => {
        setTabletsCount(tabletsFromServer.count);
      });

    getAccessories()
      .then((accessoriesFromServer) => {
        setAccessoriesCount(accessoriesFromServer.count);
      });
  }, []);

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
              chevron
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
          pagination={{
            clickable: true,
            bulletClass: styles['swiper-pagination-bullet'],
            bulletActiveClass: styles['swiper-pagination-bullet__active'],
          }}
          navigation={{
            prevEl: '.button-prev',
            nextEl: '.button-next',
          }}
          slidesPerView={1}
          className={styles['home__sliderBig-swiper']}
        >
          <SwiperSlide>
            <img
              width="97%"
              src={imageUrl1}
              alt="iPhone 14 Pro"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              width="97%"
              src={imageUrl2}
              alt="iPhones"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              width="97%"
              src={imageUrl3}
              alt="iTabs"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              width="97%"
              src={imageUrl4}
              alt="Apple Accessories"
            />
          </SwiperSlide>
        </Swiper>

        <div className={styles.home__navButton}>
          <div className="button-next">
            <Button
              btnType="Slider"
              chevronButtonType="right"
              chevron
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
              to="/accessories"
              className={`${styles['home__item-img']} ${styles['accessory-img']}`}
            />
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
