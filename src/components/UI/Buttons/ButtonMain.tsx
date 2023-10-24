import React from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  isActive: boolean,
}

export const ButtonMain: React.FC<Props> = ({ isActive }) => {
  return (
    <button
      className={cn(
        'button',
        'button__main',
        { 'button__activeMain': isActive },
      )}
    >
      Add to cart
    </button>
  );
};
