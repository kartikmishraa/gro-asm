import React from "react";
import SearchBar from "./components/SearchBar";
import "./index.css";
import VideoList from "./components/VideoList";
import SideBar from "./components/SideBar";

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
