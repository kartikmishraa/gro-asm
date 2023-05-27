import { FaGripLines, FaHome } from "react-icons/fa";

// @component-name: <SideBar />
// @desc: sidebar for the web app
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
