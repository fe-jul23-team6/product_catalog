import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { getPhones } from 'services/products.service';
import { Phone } from 'types';
import { Loader } from 'components/UI/Loader';
import { CatalogTable } from 'components/CatalogTable';
import { Dropdown } from 'components/UI/Dropdown';
import { Location } from 'components/UI/Location';
import styles from './CatalogPage.module.scss';

export const CatalogPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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

      <h1 className={styles.catalog__title}>Mobile phones</h1>

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
        <p>Something went wrong</p>
      )}

      {hasNoItemsOnServer && (
        <p>
          There are no phones on the server
        </p>
      )}

      {!!phones.length && (
        <CatalogTable phones={phones} />
      )}

      <></>
      <Outlet />
    </section>
  );
};
