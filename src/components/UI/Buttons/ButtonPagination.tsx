import React from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  content: string | null,
  isActive: boolean,
}

export const ButtonPagination: React.FC<Props> = ({ content, isActive }) => {
  return (
    <button
      type='button'
      className={cn(
        'button',
        'button__pagination',
        { 'button__activePagination': isActive },
      )}
    >
      {content}
    </button>
  );
};
