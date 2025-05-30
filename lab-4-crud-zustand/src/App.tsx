import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <Router>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/blog/new" element={<AddPost />} />
        <Route path="/blog/edit/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
