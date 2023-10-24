import React from 'react';
import cn from 'classnames';

import './ButtonFavorite.scss';

// interface Props {
//   selected: boolean,
// }

// export const ButtonFavorite: React.FC<Props> = ({ selected }) => {
export const ButtonFavorite: React.FC = () => {
  const selected = false;

  return (
    <button
      type='button'
      className={cn(
        'button',
        'favorite',
        { active: selected },
      )}
    >
      {}
    </button>
  );
};
