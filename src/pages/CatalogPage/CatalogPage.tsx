import React, { useEffect, useState, useCallback } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import { Loader } from 'components/UI/Loader';
import { CatalogTable } from 'components/CatalogTable';
import { PageTitle } from 'components/PageTitle';
import { Dropdown } from 'components/UI/Dropdown';
import { Pagination } from 'components/Pagination';
import { PageLocation } from 'components/UI/PageLocation';

import {
  DEFAULT_PAGE,
  MESSAGES,
  PAGE_SIZE_OPTIONS,
  SORT_OPTION,
} from 'utils/constants';

import { getPhones, getProductsPagination } from 'services/products.service';
import { Phone } from 'types';

import styles from './CatalogPage.module.scss';

export const CatalogPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [itemsCount, setItemsCount] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || DEFAULT_PAGE.toString();
  const perPage = searchParams.get('perPage') || null;

  // useEffect(() => {
  //   setIsLoading(true);

  //   getPhones()
  //     .then((phonesFromServer) => {
  //       setPhones(phonesFromServer.rows);
  //       setItemsCount(phonesFromServer.count);
  //     })
  //     .catch(() => {
  //       setHasError(true);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  const getItems = useCallback(() => {
    setIsLoading(true);

    if (!page || !perPage) {
      getPhones()
        .then((dataFromServer) => {
          setIsLoading(false);
          setPhones(dataFromServer.rows);
          setItemsCount(dataFromServer.count);
        })
        .catch(() => {
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (page && perPage) {
      getProductsPagination(perPage, page)
        .then((dataFromServer) => {
          setIsLoading(false);
          // setPhones(dataFromServer);
          // setItemsCount(dataFromServer.length);
          setPhones(dataFromServer.rows);
          setItemsCount(dataFromServer.count);
        })
        .catch(() => {
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [page, perPage]);

  useEffect(() => {
    getItems();
  }, [page, perPage]);

  const hasErrorMessage = hasError && !isLoading;
  const hasNoItemsOnServer = !itemsCount && !hasError && !isLoading;

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
