const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">{post.title}</h5>

          <span className="badge bg-danger rounded-pill">
            🌻 {post.reaction}
          </span>
        </div>

        <p className="card-text">{post.body}</p>

        <div className="mt-3">
          {post.tags.map((tag) => (
            <span key={tag} className="badge bg-primary hastag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
