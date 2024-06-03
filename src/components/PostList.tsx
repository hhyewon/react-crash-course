import Post from "./Post.tsx";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

function PostList() {
    const posts = useLoaderData();

    /* const [posts, setPosts] = useState<{ body: string; author: string }[]>([]);
   const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
      const fetchPosts = async () => {
          setIsFetching(true);
          const response = await fetch(`http://localhost:8080/posts`);
          const resData = await response.json();
          setPosts(resData.posts);
          setIsFetching(false);
      };

      fetchPosts();
  }, []);*/

    /*const addPostHandler = (postData: { body: string; author: string }) => {
        fetch(`http://localhost:8080/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });

        // 이전 상태를 기반으로 상태를 변경할 때는 리액트 내부에서 상태 갱신 함수를 바로 실행하는게 아니라 다음과 같이 사용
        // (X) [postData, ...existingPosts]
        // (O) ((existingPosts) => [postData, ...existingPosts]) ==> 잘못된 상태 갱신 방지
        setPosts((existingPosts: { body: string; author: string }[]) => [
            postData,
            ...existingPosts,
        ]);
    };*/

    return (
        <>
            {/*{isPosting && (
        <Modal onClose={onClose}>
          <NewPost onCancel={onClose} onAddPost={addPostHandler} />
        </Modal>
      )}*/
            /*<div style={{ textAlign: "center", color: "white" }}>
                    <p>Loading posts...</p>
                </div>*/}
            {posts?.length > 0 ? (
                <ul className={classes.posts}>
                    {posts?.map((post, index) => (
                        <Post key={index} author={post.author} body={post.body} />
                    ))}
                </ul>
            ) : (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostList;
