import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/blog/new">New Post</Link>
      </nav>
    </header>
  );
};

export default Header;
