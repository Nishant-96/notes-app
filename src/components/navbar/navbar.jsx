import "./navbar.css";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/auth-context";

export function Navbar({ changeTheme, theme }) {
  console.log(theme);
  const { token, logOutHandler } = useAuth();
  const navigate = useNavigate();

  const loginBtnClickHandler = () =>
    token ? logOutHandler() : navigate("/login");
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
        <button
          className="btn btn-float navigation-button"
          onClick={() => changeTheme()}
        >
          {theme === "light-mode" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
        <button
          className="btn btn-float navigation-button"
          onClick={loginBtnClickHandler}
        >
          {token ? <LogoutIcon /> : <LoginIcon />}
        </button>
      </div>
    </div>
  );
}
