import Post from "./Post.tsx";
function PostList() {
    return (
        <ul>
            <Post author="Maximilian" body="React.js is awesome!" />
            <Post author="Manuel" body="Chexk out" />
        </ul>
    );
}

export default PostList;
