import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Loader } from 'components/UI/Loader';
import { CatalogTable } from 'components/CatalogTable';
import { Dropdown } from 'components/UI/Dropdown';
import { Location } from 'components/UI/Location';
import { Pagination } from 'components/Pagination';

import {
  DEFAULT_PAGE,
  MESSAGES,
  PAGE_SIZE_OPTIONS,
  SORT_OPTION,
} from 'utils/constants';

import { getPhones } from 'services/products.service';
import { Phone } from 'types';
import styles from './CatalogPage.module.scss';

//
const testPaginationValue = {
  total: 70,
  perPage: 70,
  currentPage: 1,
};
//

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
  //   total: phones.length || 0,
  //   perPage: phones.length || DEFAULT_PAGE,
  //   currentPage: DEFAULT_PAGE,
  // });

  // const [searchParams] = useSearchParams();
  // const page = Number(searchParams.get('page')) || DEFAULT_PAGE;

  const [paginationOption, setPaginationOption] = useState({
    ...testPaginationValue,
  });

  const handleCurrentPage = (value: number) => setPaginationOption(
    (prevState) => {
      return {
        ...prevState,
        currentPage: value,
      };
    },
  );

  // setPaginationOption(
  //   (prevState) => {
  //     return {
  //       ...prevState,
  //       currentPage: page,
  //     };
  //   },
  // );

  // const fromItem = (paginationOption?.currentPage - 1)
  // * paginationOption.perPage + 1;

  // const maxCountItem = paginationOption?.currentPage * paginationOption.perPage;

  // const toItem = Math.min(maxCountItem, defaultPaginationValue.total);

  const handleSetPaginationOption = (value: string) => {
    const newPerPage = value === 'All'
      ? paginationOption.total
      : +value;

    setPaginationOption((prevState) => {
      return {
        ...prevState,
        perPage: newPerPage,
        currentPage: DEFAULT_PAGE,
      };
    });
  };

  const hasErrorMessage = hasError && !isLoading;
  const hasNoItemsOnServer = !phones.length && !hasError && !isLoading;

  return (
    <section className={styles.catalog}>
      <Location />

      <h1 className={styles.catalog__title}>Mobile phones</h1>

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
          <p className={styles['catalog__items-count']}>{`${phones.length} models`}</p>

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
                onOptionSelected={handleSetPaginationOption}
              />
            </div>
          </div>

          <CatalogTable phones={phones} />

          <div className={styles.catalog__pagination}>
            <Pagination
              paginationOption={paginationOption}
              onPageChange={handleCurrentPage}
            />
          </div>
        </>
      )}

      <Outlet />
    </section>
  );
};
