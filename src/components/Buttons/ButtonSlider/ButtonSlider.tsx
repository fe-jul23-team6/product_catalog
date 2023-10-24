import React from 'react';
import cn from 'classnames';

import './ButtonSlider.scss';

// interface Props {
//   isDisabled: boolean,
//   btnType: string,
// }

// export const ButtonSlider: React.FC<Props> = ({ btnType, isDisabled }) => {
export const ButtonSlider: React.FC = () => {
  const isDisabled = false;
  const btnType = '-up';

  return (
    <button
      className={cn(
        'button',
        `slider${btnType}`,
        { disabled: isDisabled },
      )}
    >
      {}
    </button>
  );
};
