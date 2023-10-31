import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Button } from 'components/UI/Buttons';
import { PaginationNumbering } from 'components/PaginationNumbering';

import { DEFAULT_PAGE, VISIBLE_PAGES_COUNT } from 'utils/constants';
import { getPages, getSearchWith } from 'utils/helpers';

import styles from './Pagination.module.scss';

type Props = {
  total: number,
};

export const Pagination: React.FC<Props> = ({
  total,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || DEFAULT_PAGE;
  const perPage = Number(searchParams.get('perPage')) || total;

  useEffect(() => {
    setSearchParams(
      getSearchWith(
        searchParams,
        { page: null },
      ),
    );
  }, [perPage]);

  const pageCount = Math.ceil(total / perPage);

  const maxFromPage = pageCount - VISIBLE_PAGES_COUNT + 1;

  let fromPage;

  if (page < DEFAULT_PAGE + 1) {
    fromPage = DEFAULT_PAGE;
  } else if (page >= DEFAULT_PAGE + 1 && page <= maxFromPage) {
    fromPage = page - 1;
  } else {
    fromPage = maxFromPage;
  }

  const pages = getPages(fromPage, pageCount);

  const isActivePrev = page === DEFAULT_PAGE;
  const isActiveNext = page === pageCount;

  const pageHandler = (direction: string) => {
    if (direction === 'next' && page < pageCount) {
      return (page + 1).toString();
    }

    if (direction === 'prev' && page > DEFAULT_PAGE + 1) {
      return (page - 1).toString();
    }

    return null;
  };

  return (
    <ul className={styles.pagination}>
      <li>
        <Link
          to={{
            search: getSearchWith(
              searchParams,
              { page: (pageHandler('prev')) },
            ),
          }}
        >
          <Button
            btnType="Slider"
            chevronButtonType="left"
            chevron
            isDisabled={isActivePrev}
          />
        </Link>
      </li>

      <ul className={styles.pagination__page}>
        {pages.map(pageNumber => (
          <PaginationNumbering
            key={pageNumber}
            pageNumber={pageNumber.toString()}
          />
        ))}
      </ul>

      <li>
        <Link
          to={{
            search: getSearchWith(
              searchParams,
              { page: (pageHandler('next')) },
            ),
          }}
        >
          <Button
            btnType="Slider"
            chevronButtonType="right"
            chevron
            isDisabled={isActiveNext}
          />
        </Link>
      </li>
    </ul>
  );
};
