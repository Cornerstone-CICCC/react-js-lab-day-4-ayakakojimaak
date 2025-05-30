import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const addPost = usePostStore((state) => state.addPost);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost(title, content);
    navigate("/blog");
  };

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Text:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddPost;
