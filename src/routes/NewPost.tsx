import classes from "./NewPost.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import Modal from "../components/Modal.tsx";
import { Link, useNavigate } from "react-router-dom";

function NewPost(props: { onAddPost?: (postData: { body: string; author: string }) => void }) {
    const navigate = useNavigate();

    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setEnteredBody(event.target.value);
    };

    const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredAuthor(event.target.value);
    };

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const postData: { body: string; author: string } = {
            body: enteredBody,
            author: enteredAuthor,
        };
        props.onAddPost?.(postData);
        navigate("..");
        // props.onCancel?.();
    };

    return (
        <>
            <Modal>
                <form className={classes.form} onSubmit={submitHandler}>
                    <p>
                        <label htmlFor="body">Text</label>
                        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
                    </p>
                    <p>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" required onChange={authorChangeHandler} />
                    </p>
                    <p className={classes.actions}>
                        <Link to=".." type="button">
                            Cancel
                        </Link>
                        <button>Submit</button>
                    </p>
                </form>
            </Modal>
        </>
    );
}

export default NewPost;
