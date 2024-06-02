import PostList from "../components/PostList.tsx";
import { Outlet } from "react-router-dom";

function Posts() {
  /*const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };*/

  return (
    <>
      <Outlet />
      <main>
        {/*<MainHeader onCreatePost={showModalHandler} />*/}
        {/*<PostList isPosting={modalIsVisible} onClose={hideModalHandler} />*/}
        <PostList />
      </main>
    </>
  );
}

export default Posts;
