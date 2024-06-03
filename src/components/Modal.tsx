import classes from "./Modal.module.css";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

function Modal({ children }: { children?: ReactNode }) {
    const navigate = useNavigate();
    const closeHandler = () => {
        // navigate(".."); // 터미널창에 cd .. 과 같음 >> 동적으로 사용 가능
        navigate("/");
    };

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;
