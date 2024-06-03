import classes from "./NewPost.module.css";
import Modal from "../components/Modal.tsx";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  /*const navigate = useNavigate();

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const postData: { body: string; author: string } = {
            body: enteredBody,
            author: enteredAuthor,
        };

        // props.onAddPost?.(postData);
        navigate("..");
        // props.onCancel?.();
    };*/

  return (
    <>
      <Modal>
        <Form method="post" className={classes.form}>
          <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" name="body" required rows={3} />
          </p>
          <p>
            <label htmlFor="name">Your name</label>
            <input type="text" name="author" id="name" required />
          </p>
          <p className={classes.actions}>
            <Link to=".." type="button">
              Cancel
            </Link>
            <button>Submit</button>
          </p>
        </Form>
      </Modal>
    </>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  // formData.get("body");
  await fetch(`http://localhost:8080/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}
