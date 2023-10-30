import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Loader } from 'components/UI/Loader';
import { CatalogTable } from 'components/CatalogTable';
import { PageTitle } from 'components/PageTitle';
import { Dropdown } from 'components/UI/Dropdown';
import { Pagination } from 'components/Pagination';

import {
  // DEFAULT_PAGE,
  MESSAGES,
  PAGE_SIZE_OPTIONS,
  SORT_OPTION,
} from 'utils/constants';

import { getPhones } from 'services/products.service';
import { Phone } from 'types';
import { PageLocation } from 'components/UI/PageLocation';
import styles from './CatalogPage.module.scss';

export const CatalogPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [itemsCount] = useState(phones.length);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // const [searchParams] = useSearchParams();
  // const page = searchParams.get('page') || DEFAULT_PAGE.toString();
  // const perPage = searchParams.get('perPage') || (phones.length).toString();

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

  // const getPaginatedItems = () => {
  //   setIsLoading(true);

  //   getPhonesPagination(perPage, page)
  //     .then((dataFromServer) => {
  //       setPhones(dataFromServer.rows);
  //       setItemsCount(dataFromServer.count);
  //     })
  //     .catch(() => {
  //       setHasError(true);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const hasErrorMessage = hasError && !isLoading;
  const hasNoItemsOnServer = !phones.length && !hasError && !isLoading;

  return (
    <section className={styles.catalog}>
      <PageLocation to="/phones" text="Phones" />

      <PageTitle title="Mobile phones" />

      {isLoading && (<Loader />)}

      {hasErrorMessage && (
        <p>{MESSAGES.NO_SERVER_RESPONSE}</p>
      )}

      {hasNoItemsOnServer && (
        <p>
          {MESSAGES.NO_PHONES}
        </p>
      )}

      {!!phones.length && (
        <>
          <p className={styles['catalog__items-count']}>{`${itemsCount} models`}</p>

          <div className={styles['catalog__dropdown-container']}>
            <div className={styles.catalog__dropdown}>
              <Dropdown
                description="Sort by"
                options={SORT_OPTION}
              />
            </div>

            <div className={styles.catalog__dropdown}>
              <Dropdown
                description="Items on page"
                options={PAGE_SIZE_OPTIONS}
              />
            </div>
          </div>

          <CatalogTable phones={phones} />

          <div className={styles.catalog__pagination}>
            <Pagination
              total={phones.length}
            />
          </div>
        </>
      )}

      <Outlet />
    </section>
  );
};
