import React from 'react';
import cn from 'classnames';

import { ReactComponent as HeartIcon }
  from 'assets/img/icons/favourites-default_icon.svg';

import { ReactComponent as HeartIconFilled }
  from 'assets/img/icons/favourites-filled_icon.svg';

import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';

import styles from './Button.module.scss';

type Props = {
  btnType: keyof typeof ButtonType,
  content: string | null,
  isActive: boolean | null,
  isDisabled: boolean | null,
  colorButtonColor: string | null;
  chevronButtonType: string | null;
};

enum ButtonType {
  Color = 'Color',
  Slider = 'Slider',
  Favourite = 'Favourite',
  Main = 'Main',
  Pagination = 'Pagination',
}

export const Button: React.FC<Props> = ({
  btnType,
  content,
  isActive,
  isDisabled,
  colorButtonColor,
  chevronButtonType,
}) => {
  const color = btnType === ButtonType.Color;
  const favourite = btnType === ButtonType.Favourite;
  const pagination = btnType === ButtonType.Pagination;
  const main = btnType === ButtonType.Main;
  const slider = btnType === ButtonType.Slider;

  return (
    <button
      type="button"
      className={cn(
        styles.button,
        { [styles.button__pagination]: pagination },
        { [styles['button__active-pagination']]: pagination && isActive },

        { [styles.button__favourite]: favourite },
        { [styles['button__active-favourite']]: favourite && isActive },

        { [styles.button__color]: color },
        { [styles[`button__${colorButtonColor}`]]: color },
        { [styles['button__active-color']]: color && isActive },

        { [styles.button__main]: main },
        { [styles['button__active-main']]: main && isActive },

        { [styles.button__slider]: slider },
        { [styles['button__disabled-slider']]: slider && isDisabled },
      )}
    >
      {main && 'Add to cart'}

      {pagination && content}

      {favourite && !isActive && (<HeartIcon />)}

      {favourite && isActive && (<HeartIconFilled />)}

      {slider && (
        <ChevronIcon className={cn(
          { [styles['button__slider-icon-disabled']]: isDisabled },
          { [styles[`button__${chevronButtonType}`]]: chevronButtonType !== 'up' },
        )}
        />
      )}
    </button>
  );
};
