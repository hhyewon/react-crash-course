import classes from "./Modal.module.css";
import { ReactNode } from "react";

function Modal({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
