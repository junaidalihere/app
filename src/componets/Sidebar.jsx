import { MdHomeFilled } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import "./Sidebar.css";

export const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="home-con">
        <MdHomeFilled className="home" />
        <p>Home</p>
      </div>
      <div className="home-con">
        <MdOutlineExplore className="home" />
        <p>Explore</p>
      </div>
      <div className="home-con">
        <MdLibraryMusic className="home" />
        <p>Library</p>
      </div>
      <div className="home-con">
        <HiOutlinePlayCircle className="home" />
        <p>Upgrade</p>
      </div>
      <div className="home-con">
        <MdOutlinePlaylistAdd className="home" />
        <p>Playlist Add</p>
      </div>
    </div>
  );
};
