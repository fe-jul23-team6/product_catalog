import React from 'react';

import { Button } from 'components/UI/Buttons';
import { PaginationPage } from 'components/PaginationPage';

import { getPages } from 'utils/helpers';
import { PaginationOption } from 'types';
import { Link } from 'react-router-dom';

import styles from './Pagination.module.scss';

type Props = {
  paginationOption: PaginationOption,
  onPageChange: (value: number) => void,
};

export const Pagination: React.FC<Props> = ({
  paginationOption,
  onPageChange,
}) => {
  const { total, perPage, currentPage } = paginationOption;

  const pageCount = Math.ceil(total / perPage);

  const pages = getPages(1, pageCount);

  const isActivePrev = currentPage === 1;
  const isActiveNext = currentPage === pageCount;
  const startVal = currentPage;

  const onNextPageHandler = () => {
    if (currentPage < pageCount) {
      onPageChange(startVal + 1);
    }
  };

  const onPrevPageHandler = () => {
    if (currentPage > 1) {
      onPageChange(startVal - 1);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li className={styles['pagination__page-item']}>
        <Link to={`#${currentPage - 1}`} onClick={onPrevPageHandler}>
          <Button
            btnType="Slider"
            chevronButtonType="left"
            shevron
            isDisabled={isActivePrev}
          />
        </Link>
      </li>

      <ul className={styles.pagination}>
        {pages.map(page => (
          <PaginationPage
            key={page}
            onPageChange={onPageChange}
            page={page}
            selectedPage={currentPage}
          />
        ))}
      </ul>

      <li>
        <Link to={`#${currentPage + 1}`} onClick={onNextPageHandler}>
          <Button
            btnType="Slider"
            chevronButtonType="right"
            shevron
            isDisabled={isActiveNext}
          />
        </Link>
      </li>
    </ul>
  );
};
