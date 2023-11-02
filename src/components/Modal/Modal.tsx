import ModalWindow, { Props } from 'react-modal';
import './Modal.scss';
import { useClickOutside } from 'hooks';
import { useRef } from 'react';
import classNames from 'classnames';

ModalWindow.setAppElement('#root');

interface ModalProps extends Props {
  toggleModal?: (isOpen: boolean) => void;
  customClassName?: string;
  children: React.ReactNode;
  contentClassName?: string;
}

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.50)',
    zIndex: 999,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
    outline: 'none',
    padding: '0',
    border: 'none',
  },
};

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen = false,
  closeTimeoutMS = 200,
  ariaHideApp = false,
  customClassName = '',
  contentClassName = '',
  toggleModal,
  ...props
}) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    if (toggleModal) {
      toggleModal(isOpen);
    }
  });

  return (
    <ModalWindow
      isOpen={isOpen}
      style={customStyles}
      closeTimeoutMS={closeTimeoutMS}
      ariaHideApp={ariaHideApp}
      preventScroll
      {...props}
    >
      <div ref={modalRef}>
        {children}
      </div>
    </ModalWindow>
  );
};

export { Modal };
export type { ModalProps };
