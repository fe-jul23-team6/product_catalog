import React from 'react';
import cn from 'classnames';

import './Button.scss';

type Props = {
  isDisabled: boolean,
  btnType: string,
}

export const ButtonSlider: React.FC<Props> = ({ btnType, isDisabled }) => {
  const standardUp = btnType === 'up' && !isDisabled;
  const standardDown = btnType === 'down' && !isDisabled;
  const standardLeft = btnType === 'left' && !isDisabled;
  const standardRight = btnType === 'right' && !isDisabled;

  const disabledUp = btnType === 'up' && isDisabled;
  const disabledDown = btnType === 'down' && isDisabled;
  const disabledLeft = btnType === 'left' && isDisabled;
  const disabledRight = btnType === 'right' && isDisabled;

  return (
    <button
      className={cn(
        'button',
        { 'button__disabledSlider': isDisabled },
        { 'disabled--up': disabledUp },
        { 'disabled--down': disabledDown },
        { 'disabled--left': disabledLeft },
        { 'disabled--right': disabledRight },

        { 'button__slider': !isDisabled },
        { 'standard--up': standardUp },
        { 'standard--down': standardDown },
        { 'standard--left': standardLeft },
        { 'standard--right': standardRight },
      )}
    >
      {}
    </button>
  );
};
