import { ReactComponent as Close }
  from 'assets/img/icons/close_icon.svg';
import { useState } from 'react';
import styles from './Modal.module.scss';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

export const Modal: React.FC<Props> = ({ setIsOpen }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__close}>
          <Close
            className={styles['modal__close-icon']}
            onClick={() => setIsOpen(false)}
          />
        </div>

        <h3 className={styles.modal__title}>
          Thank you for your order!
        </h3>
      </div>
    </div>
  );
};
