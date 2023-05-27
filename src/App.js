import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import SideBar from "./components/SideBar";
import "./index.css";

function App() {
  return (
    <>
      <div className="container">
        <SideBar />
        <div className="main">
          <SearchBar />
          <VideoList />
        </div>
      </div>
    </>
  );
}

export default App;
