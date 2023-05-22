import React from "react";
import SearchBar from "./components/SearchBar";
import "./index.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="container">
        <SideBar />
        <div className="main">
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default App;
