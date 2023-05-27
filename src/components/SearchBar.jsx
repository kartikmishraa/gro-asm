import Logo from "../resources/images/yt-logo.png";
import {
  FaBell,
  FaVideo,
  FaUserAlt,
  FaSearch,
  FaMicrophone,
} from "react-icons/fa";

// @component-name: <SearchBar />
// @desc: search bar for the web app
function SearchBar() {
  return (
    <div className="searchbar">
      <div className="flex-row">
        <img
          src={Logo}
          alt="yt-logo"
          height={50}
          width={50}
          className="pointer"
        />
        <h3 className="pointer">YouTube</h3>
      </div>
      <div className="flex-row">
        <form>
          <input
            type="text"
            name="search-bar"
            id="search"
            placeholder="Search"
          />
        </form>
        <FaSearch className="pointer" />
        <FaMicrophone className="pointer" />
      </div>
      <div className="flex-row spaced">
        <FaVideo className="pointer" />
        <FaBell className="pointer" />
        <FaUserAlt className="pointer" />
      </div>
    </div>
  );
}

export default SearchBar;
