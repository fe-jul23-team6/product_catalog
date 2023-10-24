import React from 'react';
import cn from 'classnames';

import './ButtonPagination.scss';

// interface Props {
//   content: string | null,
//   isActive: boolean,
// }

// export const ButtonPagination: React.FC<Props> = ({ content, isActive }) => {
export const ButtonPagination: React.FC = () => {
  const isActive = false;
  const content = '1';

  return (
    <button
      type='button'
      className={cn(
        'button',
        'pagination',
        { active: isActive },
      )}
    >
      {content}
    </button>
  );
};
