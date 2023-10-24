import React from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  selected: boolean,
}

export const ButtonFavorite: React.FC<Props> = ({ selected }) => {
  return (
    <button
      type='button'
      className={cn(
        'button',
        'button__favorite',
        { 'button__activeFavorite': selected },
      )}
    >
      {}
    </button>
  );
};
