import PostList from "./components/PostList.tsx";
import MainHeader from "./components/MainHeader.tsx";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <PostList isPosting={modalIsVisible} onClose={hideModalHandler} />
    </main>
  );
}

export default App;
