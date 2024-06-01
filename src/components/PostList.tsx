import Post from "./Post.tsx";
import NewPost from "./NewPost.tsx";
import classes from "./PostList.module.css";
import { ChangeEvent, useState } from "react";
import Modal from "./Modal.tsx";

function PostList({ isPosting, onClose }: { isPosting: boolean; onClose: () => void }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onClose}>
          <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body={enteredBody} />
      </ul>
    </>
  );
}

export default PostList;
