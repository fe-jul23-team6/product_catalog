import { RefObject, useEffect } from 'react';

type ClickOutsideCallback = () => void;

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: ClickOutsideCallback,
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
      console.log('works');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
