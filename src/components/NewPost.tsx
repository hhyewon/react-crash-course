import classes from "./NewPost.module.css";
import { ChangeEvent } from "react";

function NewPost(props: {
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
