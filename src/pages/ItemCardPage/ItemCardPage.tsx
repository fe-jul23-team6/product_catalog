/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable max-len */
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Button } from 'components/UI/Buttons';
import { ButtonType } from 'types';
import { getPhoneById } from 'services/products.service';
import { FullPhone } from 'types/FullPhone';
import { Loader } from 'components/UI/Loader';
import { MESSAGES, PHONE_COLORS } from 'utils/constants';
import { BASE_URL } from 'utils/fetchProducts';
import styles from './ItemCardPage.module.scss';

export const ItemCardPage = () => {
  const [phone, setPhone] = useState<FullPhone | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [displayImage, setDisplayImage] = useState('');

  const { phoneId = '' } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getPhoneById(phoneId)
      .then((phoneFromServer) => {
        setPhone(phoneFromServer);
        setDisplayImage(phoneFromServer.images[0]);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [phoneId]);

  const generateLinkInternal = (oldValue: string, newValue: string) => {
    const startIndex = phone?.id.toLowerCase().indexOf(oldValue.toLowerCase());
    let newId = phone?.id;

    if (startIndex && startIndex !== -1) {
      newId = phone?.id.slice(0, startIndex) + newValue
        + phone?.id.slice(startIndex + oldValue.length);
    }

    return `/phones/${newId?.toLowerCase()}`;
  };

  const generateLinkByColor = (color: string) => {
    if (!phone?.color) {
      return `/phones/${phoneId}`;
    }

    return generateLinkInternal(phone?.color, color);
  };

  const generateLinkByCapacity = (capacity: string) => {
    if (!phone?.capacity) {
      return `/phones/${phoneId}`;
    }

    return generateLinkInternal(phone?.capacity, capacity);
  };

  const hasErrorMessage = hasError && !isLoading;

  return (
    <div>
      {isLoading && (<Loader />)}

      {hasErrorMessage && (
        <p>{MESSAGES.NO_SERVER_RESPONSE}</p>
      )}

      {phone && !isLoading && !hasError && (
        <>
          <h1 className={styles.title}>
            {phone?.name}
          </h1>
          <div className={styles.container_top}>
            <div className={styles.photos}>
              <div className={styles.photos__main}>
                <img
                  className={styles.photos__img}
                  src={`${BASE_URL}/${displayImage}`}
                  alt={phone?.name}
                />
              </div>
              <div className={styles.photos__carousel}>
                {phone?.images.map(img => (
                  <div className={styles.photos__carousel_item}>
                    <img
                      className={styles.photos__img}
                      src={`${BASE_URL}/${img}`}
                      alt={phone?.name}
                      onClick={() => setDisplayImage(img)}
                      role="button"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setDisplayImage(img);
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <section className={styles.params}>
              <div className={styles.colors}>
                <div className={styles.info}>
                  <span>Available colors</span>
                  <span className={styles.info__code}>ID: 802390</span>
                </div>
                <div className={styles.group_colors}>
                  {phone?.colorsAvailable.map(color => (
                    <NavLink
                      to={generateLinkByColor(color)}
                      className={styles.group__item}
                    >
                      <div className={styles.svgcontainer}>
                        <div
                          className={styles.innerrect}
                          style={{ backgroundColor: PHONE_COLORS[color] }}
                        />
                        <div
                          className={cn(
                            styles.outerrect,
                            // eslint-disable-next-line @typescript-eslint/dot-notation
                            { [styles['color__active']]: color === phone?.color },
                          )}
                        />
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className={styles.capacity}>
                <span className={styles.info}>Select capacity</span>
                {phone?.capacityAvailable.map(capacityOption => (
                  <NavLink
                    to={generateLinkByCapacity(capacityOption)}
                    className={cn(
                      styles.capacity__option,
                      // eslint-disable-next-line @typescript-eslint/dot-notation
                      { [styles['capacity__active']]: capacityOption === phone?.capacity },
                    )}
                  >
                    {capacityOption}
                  </NavLink>
                ))}
              </div>
              <div className={styles.price}>
                <span className={styles.price__discount}>{`$${phone?.priceDiscount}`}</span>
                <span className={styles.price__full}>{`$${phone?.priceRegular}`}</span>
              </div>

              <div className={styles.buttons}>
                <Button
                  btnType={ButtonType.Main}
                />
                <div>
                  <Button
                    btnType={ButtonType.Favourite}
                  />
                </div>
              </div>
              <div className={styles.data}>
                <p className={styles.info}>
                  <span>Screen</span>
                  <span className={styles.values}>{phone?.screen}</span>
                </p>
                <p className={styles.info}>
                  <span>Resolution</span>
                  <span className={styles.values}>{phone?.resolution}</span>
                </p>
                <p className={styles.info}>
                  <span>Processor</span>
                  <span className={styles.values}>{phone?.processor}</span>
                </p>
                <p className={styles.info}>
                  <span>RAM</span>
                  <span className={styles.values}>{phone?.ram}</span>
                </p>
              </div>
            </section>
          </div>

          <div className={styles.container_bottom}>
            <section className={styles.about}>
              <span className={styles.about__title}>About</span>
              {phone?.description.map(parag => (
                <>
                  <p className={styles.about__header}>
                    {parag.title}
                  </p>
                  <p className={styles.about__content}>
                    {parag.text.map(text => (
                      <p>{text}</p>
                    ))}
                  </p>
                </>
              ))}
            </section>

            <section className={styles.technology}>
              <span className={styles.technology__title}>Tech specs</span>
              <p className={styles.technology__info}>
                <span className={styles.technology__key}>Screen</span>
                <span className={styles.technology__value}>{phone?.screen}</span>
              </p>
              <p className={styles.technology__info}>
                <span className={styles.technology__key}>Resolution</span>
                <span className={styles.technology__value}>{phone?.resolution}</span>
              </p>
              <p className={styles.technology__info}>
                <span className={styles.technology__key}>Processor</span>
                <span className={styles.technology__value}>{phone?.processor}</span>
              </p>
              <p className={styles.technology__info}>
                <span className={styles.technology__key}>RAM</span>
                <span className={styles.technology__value}>{phone?.ram}</span>
              </p>
              <p className={styles.technology__info}>
                <span className={styles.technology__key}>Built in memory</span>
                <span className={styles.technology__value}>{phone?.capacity}</span>
              </p>
              <p className={styles.technology__info}>
                <span className={styles.technology__key}>Camera</span>
                <span className={styles.technology__value}>
                  {phone?.camera}
                </span>
              </p>
              <p className={styles.technology__info}>
                <span className={styles.technology__key}>Zoom</span>
                <span className={styles.technology__value}>
                  {phone?.zoom}
                </span>
              </p>
              <p className={styles.technology__info}>
                <span className={styles.technology__key}>Cell</span>
                <span className={styles.technology__value}>
                  {phone?.cell.join(', ')}
                </span>
              </p>
            </section>
          </div>
        </>
      )}
    </div>
  );
};
