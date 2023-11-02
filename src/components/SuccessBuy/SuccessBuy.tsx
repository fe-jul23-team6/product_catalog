import React from 'react';

import { ReactComponent as Close }
  from 'assets/img/icons/close_icon.svg';

import { SuccessCheck } from 'components/UI';
import { Modal } from 'components/Modal';
import styles from './SuccessBuy.module.scss';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
  isModalOpen: boolean;
};

export const SuccessBuy: React.FC<Props> = ({ setIsOpen, isModalOpen }) => {
  console.log(isModalOpen);

  return (
    <Modal
      isOpen={isModalOpen}
      toggleModal={() => {
        setIsOpen(false);
      }}
    >
      <div className={styles.success}>
        <div className={styles.success__wrapper}>
          <div className={styles.success__close}>
            <Close
              className={styles['success__close-icon']}
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div>
            <SuccessCheck />
            <div className={styles.success__message}>
              <h3 className={styles.success__title}>
                Thank you!
              </h3>
              <p className={styles.success__text}>
                Your order is being proccessed
              </p>
              <p className={styles.success__text}>
                Have a good day!
              </p>
              <p className={styles.success__text}>
                😎👍
              </p>
              <button
                className={styles.success__secret}
                type="button"
              >
                secret
              </button>
            </div>
          </div>

        </div>
      </div>
    </Modal>

  );
};
