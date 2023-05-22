import React from "react";
import Logo from "../yt-logo.png";
import {
  FaBell,
  FaVideo,
  FaUserAlt,
  FaSearch,
  FaMicrophone,
} from "react-icons/fa";

function SearchBar() {
  return (
    <div className="searchbar">
      <div className="flex-row">
        <img src={Logo} alt="yt-logo" height={50} width={50} />
        <p>YouTube</p>
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
        <FaSearch />
        <FaMicrophone />
      </div>
      <div className="flex-row spaced">
        <FaVideo />
        <FaBell />
        <FaUserAlt />
      </div>
    </div>
  );
}

export default SearchBar;