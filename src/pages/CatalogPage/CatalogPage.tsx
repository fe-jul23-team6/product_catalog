import React, { useEffect, useState, useCallback } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import { Dropdown, Loader, Breadcrumbs } from 'components/UI';
import { CatalogTable, PageTitle, Pagination } from 'components';

import {
  DEFAULT_PAGE,
  DEFAULT_SORT_BY,
  MESSAGES,
  PAGE_SIZE_OPTIONS,
  SORT_OPTION,
} from 'utils/constants';

import { SortOption } from 'types/SortOption';
import { getPhones } from 'services/products.service';
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
  const sort = (searchParams.get('sort') || DEFAULT_SORT_BY) as keyof typeof SortOption;

  const getItems = useCallback(() => {
    setIsLoading(true);

    getPhones(sort, page, perPage)
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
  }, [page, perPage, sort]);

  useEffect(() => {
    getItems();
  }, [page, perPage, sort]);

  const hasErrorMessage = hasError && !isLoading;
  const hasNoItemsOnServer = !itemsCount && !hasError && !isLoading;

  return (
    <section className={styles.catalog}>
      <Breadcrumbs to="/phones" text="Phones" />

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
        <section>
          <p className={styles['catalog__items-count']}>{`${itemsCount} models`}</p>

          <div className={styles['catalog__dropdown-container']}>
            <div className={styles.catalog__dropdown}>
              <Dropdown
                description="Sort by"
                options={SORT_OPTION}
                query={sort}
              />
            </div>

            <div className={styles.catalog__dropdown}>
              <Dropdown
                description="Items on page"
                options={PAGE_SIZE_OPTIONS}
                query={perPage}
              />
            </div>
          </div>

          <CatalogTable phones={phones} />

          <div className={styles.catalog__pagination}>
            <Pagination
              total={itemsCount}
            />
          </div>
        </section>
      )}

      <Outlet />
    </section>
  );
};
