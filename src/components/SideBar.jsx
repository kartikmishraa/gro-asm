import React from "react";
import { FaGripLines, FaHome } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar">
      <FaGripLines />
      <div className="flex-column">
        <FaHome />
        Home
      </div>
    </div>
  );
}

export default SideBar;
