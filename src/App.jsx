import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

function App() {
  return (
    <div className="Container">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="Content">
        <Header></Header>
        <CreatePost></CreatePost>
        <PostList></PostList>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
