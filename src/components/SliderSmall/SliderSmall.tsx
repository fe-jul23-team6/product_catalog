/* eslint-disable no-console */
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Card } from 'components/Card';
import { Button } from 'components/UI/Buttons';
import { Loader } from 'components/UI/Loader';
import { Phone } from 'types';
import { MESSAGES } from 'utils/constants';
import { ProductsContext } from 'context/ProductsContext';
import styles from './SliderSmall.module.scss';
import arrowStyles from '../Pagination/Pagination.module.scss';
import 'swiper/scss/navigation';
import 'swiper/scss';

type Props = {
  selectedPhones: Phone[],
  isLoading: boolean,
  hasError: boolean,
  headerTitle: string,
  moverClass: string,
};

export const SliderSmall: React.FC<Props> = ({
  selectedPhones,
  isLoading,
  hasError,
  headerTitle,
  moverClass,
}) => {
  const {
    checkInCart,
    checkInFav,
  } = useContext(ProductsContext);

  const hasErrorMessage = hasError && !isLoading;
  const hasNoItemsOnServer
    = !selectedPhones.length && !hasError && !isLoading;

  return (
    <section className={styles.sliderSmall}>
      {hasErrorMessage && (
        <p>{MESSAGES.NO_SERVER_RESPONSE}</p>
      )}

      {hasNoItemsOnServer && (
        <p>
          {MESSAGES.NO_PHONES}
        </p>
      )}

      <div className={styles.sliderSmall__header}>
        <h2 className={styles.sliderSmall__header_title}>
          {headerTitle}
        </h2>

        <ul className={arrowStyles.pagination}>
          <li className={`${moverClass}-prev`}>
            <Button
              btnType="Slider"
              chevronButtonType="left"
              shevron
            />
          </li>

          <li className={`${moverClass}-next`}>
            <Button
              btnType="Slider"
              chevronButtonType="right"
              shevron
            />
          </li>
        </ul>
      </div>

      {isLoading && (<Loader />)}

      <Swiper
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: `.${moverClass}-next`,
          prevEl: `.${moverClass}-prev`,
        }}
        spaceBetween={16}
        slidesPerView={4}
        className={styles.sliderSmall__slider}
      >
        {selectedPhones.map(phone => {
          const isOrdered = checkInCart(+phone.id);
          const isFavourite = checkInFav(+phone.id);

          return (
            <SwiperSlide style={{ width: '208px' }}>
              <Card
                key={phone.id}
                phone={phone}
                isOrdered={isOrdered}
                isFavourite={isFavourite}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

    </section>

  );
};
