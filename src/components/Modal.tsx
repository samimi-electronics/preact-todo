import { JSX } from "preact";
import './Modal.css';

type ModalProps = {
  showModal: boolean;
  children?: JSX.Element | JSX.Element[];
};

type ModalHeaderProps = {
  title?: string;
};

const Modal = ({ showModal, children }: ModalProps) => {
  if (showModal === true) {
    return (
      <div className="d-flex position-absolute w-100 h-100 top-0 left-0 overflow-hidden justify-content-center align-items-center bgBlur" style={{ transition: '0.5s all ease-in-out', zIndex: 800 }}>
        <div
          className="bg-white rounded shadow-lg "
          style={{
            maxWidth: "350px",
            minWidth: "350px",
            minHeight: "250px",
            // transform: 'translate(0px, -25%)',
          }}
        >
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
