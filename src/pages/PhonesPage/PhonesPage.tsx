import { FC, useEffect, useState } from 'react';
import { getPhones } from 'services/products.service';
import { Phone } from 'types';

export const PhonesPage: FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then((phonesFromServer) => {
        setPhones(phonesFromServer);
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
