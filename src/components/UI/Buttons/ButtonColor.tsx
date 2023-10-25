import React from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  isActive: boolean,
  color: string,
}

export const ButtonColor: React.FC<Props> = ({ color, isActive }) => {
  return (
    <button
      className={cn(
        'button',
        'button__color',
        `button__${color}`,
        { 'button__activeColor': isActive },
      )}
    >
      {}
    </button>
  );
};
