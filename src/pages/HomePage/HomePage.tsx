import { useState, useEffect } from 'react';
import { PageTitle } from 'components/PageTitle';
import { getPhones } from 'services/products.service';
import { SliderSmall } from 'components/SliderSmall';
import { Phone } from 'types';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const [newModels, setNewModels] = useState<Phone[]>([]);
  const [mostReducedModels, setMostReducedModels] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getPhones()
      .then((phonesFromServer) => {
        const newPhones = phonesFromServer.filter(({ year }) => year === 2022);
        const mostReducedPhones = phonesFromServer.filter(
          ({ fullPrice, price }) => (fullPrice - price) >= 100,
        );

        setNewModels(newPhones);
        setMostReducedModels(mostReducedPhones);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.home}>
      <PageTitle
        title="Welcome to Nice Gadgets store!"
      />

      <SliderSmall
        selectedPhones={newModels}
        isLoading={isLoading}
        hasError={hasError}
        headerTitle="Brand new models"
        moverClass="new"
      />

      <SliderSmall
        selectedPhones={mostReducedModels}
        isLoading={isLoading}
        hasError={hasError}
        headerTitle="Hot prices"
        moverClass="hot"
      />
    </div>
  );
};
