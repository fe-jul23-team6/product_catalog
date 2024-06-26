import { ContactsCard, PageTitle, Breadcrumbs } from 'components';

import { contactsData } from 'utils';

import styles from './ContactsPage.module.scss';

export const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <Breadcrumbs />

      <PageTitle title="Contacts" />

      <div className={styles.contacts__wrapper}>
        <div className={styles.contacts__content}>
          {contactsData.map(dev => (
            <ContactsCard key={dev.name} dev={dev} />
          ))}
        </div>
      </div>
    </div>
  );
};
