import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = ({}) => {
  const { addPost } = useContext(PostList);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const post = {
      id: Date.now(),
      title: formData.get("title"),
      body: formData.get("body"),
      reaction: Number(formData.get("reaction")),
      userId: formData.get("userId"),
      tags: formData
        .get("tags")
        .split(",")
        .map((tag) => tag.trim()),
    };

    addPost(post);

    event.target.reset();
  };
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Create New Post</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Post Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter post title"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Post Content
              </label>
              <textarea
                className="form-control"
                id="body"
                name="body"
                rows="4"
                placeholder="What's on your mind?"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="reaction" className="form-label">
                Reactions
              </label>
              <input
                type="number"
                className="form-control"
                id="reaction"
                name="reaction"
                placeholder="Enter reaction count"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userId" className="form-label">
                User ID
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                name="userId"
                placeholder="e.g. user_1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="tags" className="form-label">
                Tags
              </label>
              <input
                type="text"
                className="form-control"
                id="tags"
                name="tags"
                placeholder="#summer, #vacation"
              />
              <div className="form-text">Separate tags with commas.</div>
            </div>

            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
