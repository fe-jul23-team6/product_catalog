import React from 'react';
import cn from 'classnames';

import './ButtonColor.scss';

// type Props = {
//   isActive: boolean,
//   color: string,
// }

// export const ButtonColor: React.FC<Props> = ({ color, isActive }) => {
export const ButtonColor: React.FC = () => {
  const color = 'green';
  const isActive = false;

  return (
    <button
      className={cn(
        'button',
        'color',
        `${color}`,
        { active: isActive },
      )}
    >
      {}
    </button>
  );
};
