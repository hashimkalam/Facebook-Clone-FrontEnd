import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PeopleIcon from "@mui/icons-material/People";

import AddIcon from "@mui/icons-material/Add";
import { Avatar, IconButton } from "@mui/material";

import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MenuIcon from "@mui/icons-material/Menu";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://img.icons8.com/?size=512&id=118497&format=png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Seatch Facebook" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header__option">
          <PeopleIcon fontSize="large" />
        </div>

        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <IconButton className="header__rightFind">
          <h6>find friends</h6>
        </IconButton>
        <IconButton className="header__rightIcon">
          <MenuIcon />
        </IconButton>

        <IconButton className="header__rightIcon">
          <ForumIcon />
        </IconButton>

        <IconButton className="header__rightIcon">
          <NotificationsActiveIcon />
        </IconButton>

        <div className="header__rightInfo">
          <Avatar src={user.photoURL} />
        </div>
      </div>
    </div>
  );
}

export default Header;
