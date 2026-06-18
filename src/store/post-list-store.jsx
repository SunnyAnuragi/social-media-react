import { createContext, useReducer } from "react";
const DEFAULT_CONTEXT = {
  postList: [
    {
      id: 1,
      title: "Enjoy vacation",
      body: "Hii everyone here i am i manali enjoying my vacation",
      reaction: 1065,
      userId: "user_1",
      tags: ["#summer", "#vacation"],
    },
    {
      id: 2,
      title: "internship",
      body: "Hii everyone i excited to announced i have officaly join amazon",
      reaction: 4654,
      userId: "user_2",
      tags: ["#intership", "#dedication"],
    }
  ],
  addPost: () => {},
  deletePost: () => {},
};
export const PostList = createContext(DEFAULT_CONTEXT);
const postListReducer = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = (props) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_CONTEXT.postList,
  );
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {props.children}
    </PostList.Provider>
  );
};

export default PostListProvider;
