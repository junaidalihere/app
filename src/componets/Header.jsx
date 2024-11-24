import { VscMenu } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCastConnected } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import "./Header.css";
import { useState } from "react";

export const Header = ({
  toggleSidebar,
  Setinput,
  sinput,
  songCell,
  show,
  cellme,
}) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      songCell();
    }
  };

  return (
    <header>
      <nav>
        <VscMenu className="menu-icon" onClick={toggleSidebar} />
        <img
          className="logo"
          src="https://music.youtube.com/img/ringo2/on_platform_logo_dark.svg"
          alt="logo"
        />
        <div className={`serching ${show ? "non" : ""}`}>
          <CiSearch className="search-icon none" />
          <IoCloseOutline className="close" onClick={cellme} />
          <input
            type="text"
            placeholder="Search songs "
            value={sinput}
            onChange={(e) => {
              Setinput(e.target.value);
              onkeydown = { handleKeyPress };
            }}
          />
        </div>
      </nav>
      <div className="profile-div">
        <CiSearch className="search-icon mobile" onClick={cellme} />
        <MdOutlineCastConnected className="Dcon" />
        <img
          className="profile-img"
          src="https://yt3.ggpht.com/29hH4jvskY0Q3EZf2p0k_kU5nxHAcSE7WlHwEi0xhGZJxKeMdfPEycynvj284rG3CeTHUqho=s108-c-k-c0x00ffffff-no-rj"
          alt="profile"
        />
      </div>
    </header>
  );
};
