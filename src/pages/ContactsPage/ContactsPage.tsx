/* eslint-disable jsx-a11y/anchor-is-valid */
import { PageTitle } from 'components/PageTitle';
import { Breadcrumbs } from 'components/UI/Breadcrumbs';
import { ContactsCard } from 'components/ContactCard';
import { contactsData } from 'utils/contactsData';
import styles from './ContactsPage.module.scss';

export const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <Breadcrumbs to="/contacts" text="Contacts" />

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
