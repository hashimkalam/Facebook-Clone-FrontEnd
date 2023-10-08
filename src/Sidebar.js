import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from "./StateProvider";
import FeedIcon from "@mui/icons-material/Feed";
import FacebookIcon from "@mui/icons-material/Facebook";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FlagIcon from "@mui/icons-material/Flag";
import EventBusyIcon from "@mui/icons-material/EventBusy";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />

      <SidebarRow Icon={PeopleIcon} title="Find friends" />
      <SidebarRow Icon={FeedIcon} title="Feeds" />
      <SidebarRow Icon={FacebookIcon} title="Welcome" />
      <SidebarRow Icon={GroupIcon} title="Groups" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={OndemandVideoIcon} title="Video" />
      <SidebarRow Icon={HistoryIcon} title="Memories" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={EventBusyIcon} title="Events" />
      <SidebarRow Icon={ExpandMoreIcon} title="See more" />

      <div className="sidebar__nav">
        <p>
          Privacy · Terms · Advertising · Ad choices · Cookies · · Meta © 2023
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
