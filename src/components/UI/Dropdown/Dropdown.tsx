import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { ReactComponent as Arrow }
  from 'assets/img/icons/chevron-up_icon.svg';

import styles from './Dropdown.module.scss';

type Props = {
  title: string,
  description: string,
  // options: string[],
  // onItemSelected: (item: string) => void,
};

const options = ['1', '2', '3'];

export const Dropdown: React.FC<Props> = ({
  title,
  description,
  // options,
  // onItemSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState(title);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

  const handleItemClick = (item: string) => {
    setDropdownTitle(item);
    // onItemSelected(item);
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
          {options.map(item => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              data-value="option1"
              className={styles.option__item}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
