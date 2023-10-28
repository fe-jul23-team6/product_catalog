import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'components/UI/Buttons';

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
  return (
    <li>
      <Link to={`#${page}`} onClick={() => onPageChange(page)}>
        <Button
          btnType="Pagination"
          isActive={selectedPage === page}
          content={page.toString()}
        />
      </Link>
    </li>
  );
};
