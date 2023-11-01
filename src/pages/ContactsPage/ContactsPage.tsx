import { ContactsCard, PageTitle } from 'components';
import { PageLocation } from 'components/UI';

import { contactsData } from 'utils/contactsData';

import styles from './ContactsPage.module.scss';

export const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <PageLocation to="/contacts" text="Contacts" />

      <PageTitle title="Contacts" />

      <div className={styles.contacts__wrapper}>
        <div className={styles.contacts__content}>
          {contactsData.map(dev => (
            <ContactsCard dev={dev} />
          ))}
        </div>
      </div>
    </div>
  );
};
