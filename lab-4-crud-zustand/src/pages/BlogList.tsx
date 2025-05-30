import { Link } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

const BlogList = () => {
  const posts = usePostStore((state) => state.posts);

  return (
    <div>
      <h1>Blog List</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
