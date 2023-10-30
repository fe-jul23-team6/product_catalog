/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import './PageLocation.scss';
import { ReactComponent as HomeIcon }
  from 'assets/img/icons/home_icon.svg';
import { ReactComponent as ChevronIcon }
  from 'assets/img/icons/chevron-up_icon.svg';

interface Props {
  text: string
  to: string;
}

export const PageLocation: React.FC<Props> = ({ text, to }) => {
  return (
    <div className="location">
      <div className="location__icon-home icon-home">
        <Link to="/home" className="icon-home__link">
          <HomeIcon />
        </Link>
      </div>

      <div className="location__icon-chevron">
        <ChevronIcon />
      </div>

      <div className="location__selected-page selected-page">
        <Link
          to={to}
          className="selected-page__paragraph"
        >
          {text}
        </Link>
      </div>
    </div>
  );
};
