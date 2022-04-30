import "./navbar.css";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, NavLink } from "react-router-dom";
export function Navbar() {
  //   will be removed state mangement
  const flager = true;

  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img
            className="image-responsive nav-left-img"
            alt="logo "
            src="/Assets/notemate1.png"
          />
        </Link>

        <div className="nav-left-title">NoteMate</div>
      </div>
      <div className="nav-center">
        <div className="nav-center-input">
          <SearchIcon />
          <input placeholder="Search" type="Search" />
        </div>
      </div>
      <div className="nav-right">
        <button className="btn btn-float navigation-button">
          <FilterAltIcon />
        </button>
        <button className="btn btn-float navigation-button">
          {flager ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
        <NavLink to="/login">
          <button className="btn btn-float navigation-button">
            {flager ? <LoginIcon /> : <LogoutIcon />}
          </button>
        </NavLink>
      </div>
    </div>
  );
}
