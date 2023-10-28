import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Loader } from 'components/UI/Loader';
import { CatalogTable } from 'components/CatalogTable';
import { PageTitle } from 'components/PageTitle';
import { Dropdown } from 'components/UI/Dropdown';
import { Location } from 'components/UI/Location';
import { Pagination } from 'components/Pagination';

import { getPhones } from 'services/products.service';
import { MESSAGES, PAGE_SIZE_OPTIONS, SORT_OPTION } from 'utils/constants';
import { Phone } from 'types';
import styles from './CatalogPage.module.scss';

const defaultPaginationValue = {
  total: 1,
  perPage: 1,
  currentPage: 1,
};

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

  // const [paginationOption, setPaginationOption] = useState({
  //   total: phones.length,
  //   perPage: phones.length || 1,
  //   currentPage: 1,
  // });

  const [paginationOption, setPaginationOption] = useState({
    ...defaultPaginationValue,
  });

  // eslint-disable-next-line no-console
  console.log(paginationOption);

  const handleCurrentPage = (value: number) => setPaginationOption(
    (prevState) => {
      return {
        ...prevState,
        currentPage: value,
      };
    },
  );

  // const fromItem = (paginationOption?.currentPage - 1)
  // * paginationOption.perPage + 1;

  // const maxCountItem = paginationOption?.currentPage * paginationOption.perPage;

  // const toItem = Math.min(maxCountItem, defaultPaginationValue.total);

  const handleSetPaginationOption = (value: string) => {
    setPaginationOption((prevState) => {
      return {
        ...prevState,
        perPage: +value,
        currentPage: defaultPaginationValue.currentPage,
      };
    });
  };

  const hasErrorMessage = hasError && !isLoading;
  const hasNoItemsOnServer = !phones.length && !hasError && !isLoading;

  return (
    <section className={styles.catalog}>
      <Location />

      <PageTitle title="Mobile phones" />

      <p className={styles['catalog__items-count']}>{`${phones.length} models`}</p>

      <div className={styles['catalog__dropdown-container']}>
        <div className={styles.catalog__dropdown}>
          <Dropdown
            description="Sort by"
            options={SORT_OPTION}
            onItemSelected={handleSetPaginationOption}
          />
        </div>

        <div className={styles.catalog__dropdown}>
          <Dropdown
            description="Items on page"
            options={PAGE_SIZE_OPTIONS}
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

      <div className={styles.catalog__pagination}>
        <Pagination
          paginationOption={paginationOption}
          onPageChange={handleCurrentPage}
        />
      </div>

      <Outlet />
    </section>
  );
};
