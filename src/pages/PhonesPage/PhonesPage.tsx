import { useEffect, useState } from 'react';

import { getPhones } from 'services';

import { Phone } from 'types';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then((phonesFromServer) => {
        setPhones(phonesFromServer.rows);
      });
  }, []);

  return (
    <>
      <h1>Mobile phones</h1>
      {phones.map(phone => (
        <div
          key={phone.id}
        >
          {phone.name}
        </div>
      ))}
    </>
  );
};
