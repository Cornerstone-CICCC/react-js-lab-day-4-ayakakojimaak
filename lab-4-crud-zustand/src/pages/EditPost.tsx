import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = usePostStore((state) => state.getPost(id || ""));
  const updatePost = usePostStore((state) => state.updatePost);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (!post) {
    return <div>Not Found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePost(post.id, title, content);
    navigate(`/blog/${post.id}`);
  };

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Text:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
