import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="Container">
      <div>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <div className="Content">
        <Header></Header>
        {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
