import { createContext, useReducer } from "react";
const DEFAULT_CONTEXT = {
  postList: [
    {
      id: 1,
      title: "Cracked My First MERN Project 🚀",
      body: "After weeks of learning React, Node.js, Express, and MongoDB, I finally completed my first full-stack MERN project. Learned a lot about APIs, authentication, and deployment.",
      reaction: 245,
      userId: "sunny_01",
      tags: ["#mern", "#webdevelopment", "#coding"],
    },
    {
      id: 2,
      title: "100 LeetCode Problems Solved 💯",
      body: "Reached the milestone of solving 100 LeetCode problems. Consistency beats intensity. Next target: 250 problems and stronger problem-solving skills.",
      reaction: 512,
      userId: "coder_boy",
      tags: ["#leetcode", "#dsa", "#placements"],
    },
    {
      id: 3,
      title: "Morning Workout Done 💪",
      body: "Started my day with Push Day at the gym. Fitness and coding together make a powerful combination.",
      reaction: 178,
      userId: "fitness_dev",
      tags: ["#fitness", "#gym", "#motivation"],
    },
    {
      id: 4,
      title: "Amazon Interview Preparation 📚",
      body: "Currently revising OS, DBMS, CN, and OOP along with DSA. Technical interviews require strong fundamentals.",
      reaction: 386,
      userId: "future_sde",
      tags: ["#amazon", "#interviewprep", "#csfundamentals"],
    },
    {
      id: 5,
      title: "Built My React Social Media App 🎉",
      body: "Implemented Context API, useReducer, Create Post, Delete Post, and dynamic rendering. Feeling much more confident with React now.",
      reaction: 721,
      userId: "react_ninja",
      tags: ["#reactjs", "#frontend", "#javascript"],
    },
    {
      id: 6,
      title: "Late Night Coding Session 🌙",
      body: "Debugged a nasty React state bug after 2 hours. The satisfaction when the app finally works is unmatched.",
      reaction: 293,
      userId: "debug_master",
      tags: ["#codinglife", "#debugging", "#developer"],
    },
    {
      id: 7,
      title: "Open Source Contribution Accepted 🎯",
      body: "My first pull request was merged into an open-source project today. Small contribution, huge learning experience.",
      reaction: 605,
      userId: "opensource_dev",
      tags: ["#opensource", "#github", "#programming"],
    },
    {
      id: 8,
      title: "Learning System Design 🏗️",
      body: "Started studying Low Level Design and design patterns. Excited to build scalable applications.",
      reaction: 332,
      userId: "system_architect",
      tags: ["#systemdesign", "#lld", "#softwareengineering"],
    },
  ],
  addPost: () => {},
  deletePost: () => {},
};
export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload.postId);

    case "ADD_POST":
      return [action.payload, ...currPostList];

    default:
      return currPostList;
  }
};
const PostListProvider = (props) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_CONTEXT.postList,
  );

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

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
