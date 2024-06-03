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

export async function loader() {
    const response = await fetch(`http://localhost:8080/posts`);
    const resData = await response.json();
    return resData.posts;
}
