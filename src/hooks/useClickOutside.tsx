import React, { RefObject } from 'react';

type ClickOutsideCallback = () => void;

export const useClickOutside = (ref: RefObject<HTMLElement>, callback: ClickOutsideCallback) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
      console.log('works');
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
