import React from 'react';
import cn from 'classnames';

import './ButtonMain.scss';

// interface Props {
//   isActive: boolean,
// }

// export const ButtonMain: React.FC<Props> = ({ isActive }) => {
export const ButtonMain: React.FC = () => {
  const isActive = false;

  return (
    <button
      className={cn(
        'button',
        'main',
        { active: isActive },
      )}
    >
      Add to cart
    </button>
  );
};
