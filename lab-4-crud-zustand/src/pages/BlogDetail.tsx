import { useParams, useNavigate, Link } from "react-router-dom";
import { usePostStore } from "../stores/post.store";
import toast from "react-hot-toast";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = usePostStore((state) => state.getPost(id || ""));
  const deletePost = usePostStore((state) => state.deletePost);

  if (!post) {
    return <div>Not Found</div>;
  }

  const handleDelete = () => {
    deletePost(post.id);
    toast.success("delete post");
    navigate("/blog");
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div>
        <Link to={`/blog/edit/${post.id}`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BlogDetail;
