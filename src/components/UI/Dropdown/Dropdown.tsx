import React,
{
  useEffect,
  useRef,
  useState,
} from 'react';

import { Link, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as Arrow }
  from 'assets/img/icons/chevron-up_icon.svg';

import { getSearchWith } from 'utils/helpers';

import styles from './Dropdown.module.scss';

type Props = {
  description: string,
  options: string[],
};

export const Dropdown: React.FC<Props> = ({
  description,
  options = [],
}) => {
  const [searchParams] = useSearchParams();

  const isSort = description === 'Sort by';
  const isItemsOnPage = description === 'Items on page';

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // if (isSort) {
    //   getSearchWith(
    //     searchParams,
    //     { sort: dropdownTitle.toLowerCase() },
    //   );
    // }

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current
        && !dropdownRef.current.contains(event.target as Node | null)) {
        setIsOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleItemClick = (option: string) => {
    setDropdownTitle(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <span className={styles.dropdown__desc}>{description}</span>
      <button
        type="button"
        className={classNames(
          styles.dropdown__selector,
          styles.clicked,
        )}
        onClick={toggleDropdown}
      >
        {dropdownTitle}
        <Arrow
          className={classNames({ [styles.dropdown__img]: !isOpen })}
        />
      </button>
      {isOpen && (
        <ul className={classNames(styles.dropdown__option, styles.option)}>
          {options.map(option => {
            let optionValue: string | null = option;

            if (option === 'All') {
              optionValue = null;
            }

            return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                key={option}
                data-value="option1"
                className={styles.option__item}
                onClick={() => handleItemClick(option)}
              >
                {isItemsOnPage && (
                  <Link
                    to={{
                      search: getSearchWith(
                        searchParams,
                        { perPage: optionValue },
                      ),
                    }}
                  >
                    {option}
                  </Link>
                )}

                {isSort && (
                  <Link
                    to={{
                      search: getSearchWith(
                        searchParams,
                        { sort: option.toLowerCase() },
                      ),
                    }}
                  >
                    {option}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
