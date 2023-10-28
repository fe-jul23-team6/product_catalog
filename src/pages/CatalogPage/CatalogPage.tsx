import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Loader } from 'components/UI/Loader';
import { CatalogTable } from 'components/CatalogTable';
import { PageTitle } from 'components/PageTitle';
import { Dropdown } from 'components/UI/Dropdown';
import { Location } from 'components/UI/Location';

import { getPhones } from 'services/products.service';
import { MESSAGES } from 'utils/constants';
import { Phone } from 'types';
import styles from './CatalogPage.module.scss';

export const CatalogPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getPhones()
      .then((phonesFromServer) => {
        setPhones(phonesFromServer);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const hasErrorMessage = hasError && !isLoading;
  const hasNoItemsOnServer = !phones.length && !hasError && !isLoading;

  return (
    <section className={styles.catalog}>
      <Location />

      <PageTitle title="Mobile phones" />

      <p className={styles['catalog__items-count']}>95 models</p>

      <div className={styles['catalog__dropdown-container']}>
        <div className={styles.catalog__dropdowns}>
          <Dropdown
            title="title"
            description="Sort by"
          />
        </div>

        <div className={styles.catalog__dropdowns}>
          <Dropdown
            title="title"
            description="Items on page"
          />
        </div>
      </div>

      {isLoading && (<Loader />)}

      {hasErrorMessage && (
        <p>{MESSAGES.NO_SERVER_RESPONSE}</p>
      )}

      {hasNoItemsOnServer && (
        <p>
          {MESSAGES.NO_PHONE}
        </p>
      )}

      {!!phones.length && (
        <CatalogTable phones={phones} />
      )}

      <Outlet />
    </section>
  );
};
