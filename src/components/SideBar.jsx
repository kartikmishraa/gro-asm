import { FaGripLines, FaHome } from "react-icons/fa";

// @component-name: <SideBar />
// @desc: sidebar for the web app
function SideBar() {
  return (
    <div className="sidebar">
      <FaGripLines className="pointer" />
      <div className="flex-column">
        <FaHome className="pointer" />
      </div>
    </div>
  );
}

export default SideBar;
