import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as Arrow }
  from 'assets/img/icons/chevron-up_icon.svg';

import styles from './Dropdown.module.scss';

type Props = {
  description: string,
  options: string[],
  onOptionSelected?: (option: string) => void,
};

export const Dropdown: React.FC<Props> = ({
  description,
  options = [],
  onOptionSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState(options[0]);
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

  const handleItemClick = (option: string) => {
    if (typeof onOptionSelected !== 'undefined') {
      onOptionSelected(option);
    }

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
          {options.map(option => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={option}
              data-value="option1"
              className={styles.option__item}
              onClick={() => handleItemClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
