import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
const PostList = () => {
  // const handleDeletePost = (postId) => {
  //   setPosts(posts.filter((post) => post.id !== postId));
  // };
  const { postList, deletePost } = useContext(PostListData);
  console.log(postList);
  return (
    <>
      <div className="post-list">
        {postList.map((post) => (
          <Post key={post.id} post={post} onDelete={deletePost} />
        ))}
      </div>
    </>
  );
};
export default PostList;
