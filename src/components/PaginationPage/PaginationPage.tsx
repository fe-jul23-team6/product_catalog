import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Button } from 'components/UI/Buttons';

import styles from './PaginationPage.module.scss';

type Props = {
  page: number,
  selectedPage: number,
  onPageChange: (value: number) => void,
};

export const PaginationPage: React.FC<Props> = ({
  page,
  selectedPage,
  onPageChange,
}) => {
  const isActive = selectedPage === page;

  return (
    <li className={cn(
      { [styles['pagination-page__active']]: isActive },
    )}
    >
      <Link to={`page=${page}`} onClick={() => onPageChange(page)}>
        <Button
          btnType="Pagination"
          isActive={isActive}
          content={page.toString()}
        />
      </Link>
    </li>
  );
};
