import React from 'react';

type Props = {
  title: string,
  description: string,
  options: string[],
};

export const Dropdown: React.FC<Props> = ({ title, description, options }) => {
  return (
    <>
      <label htmlFor="dropdown">
        {description}
      </label>
      <select id="dropdown" value={title}>
        {options.map(option => (
          <option>{option}</option>
        ))}
      </select>
    </>
  );
};
