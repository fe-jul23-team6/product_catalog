import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Button } from 'components/UI/Button';
import { getSearchWith } from 'utils/helpers';
import { DEFAULT_PAGE } from 'utils/constants';

type Props = {
  pageNumber: string,
};

export const PaginationNumbering: React.FC<Props> = ({
  pageNumber,
}) => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '';
  let isActive = page === pageNumber;
  let searchPageValue: string | null = pageNumber;

  if (Number(pageNumber) === DEFAULT_PAGE) {
    searchPageValue = null;
    isActive = !page;
  }

  return (
    <li>
      <Link
        to={{
          search: getSearchWith(searchParams, { page: searchPageValue }),
        }}
      >
        <Button
          btnType="Pagination"
          isActive={isActive}
          content={pageNumber}
        />
      </Link>
    </li>
  );
};
