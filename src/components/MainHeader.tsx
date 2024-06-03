import { Link } from "react-router-dom"; // 브라우저가 자동으로 요청 전송을 못하도록
import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

function MainHeader() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage />
                React Poster
            </h1>
            <p>
                <Link to="/create-post" className={classes.button}>
                    <MdPostAdd size={18} />
                    New Post
                </Link>
            </p>
        </header>
    );
}

export default MainHeader;
