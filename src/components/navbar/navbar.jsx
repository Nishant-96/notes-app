import "./navbar.css";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/auth-context";
import { FilterCard } from "../filter/filter";
import { useData } from "../../context/data/data-context";


export function Navbar({ changeTheme, theme }) {
  const { token, logOutHandler } = useAuth();
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const filterClickHandler = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/notes");
      dispatch({ type: "FILTER_MODAL", payload: { value: true } });
    }
  };

  const searchHandler = (event) => {
    if (pathname !== "/notes") {
      navigate("/notes");
    }
    if (event.key === "Enter" || event.key === "Backspace") {
      dispatch({
        type: "SEARCH_NOTE",
        payload: { value: event.target.value },
      });
    }
  };

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
          <input
            placeholder="Search"
            type="Search"
            value={state.searchInput}
            onChange={(event) =>
              dispatch({
                type: "SET_SEARCH_INPUT",
                payload: { value: event.target.value },
              })
            }
            onKeyUp={searchHandler}
          />
        </div>
      </div>
      <div className="nav-right">
        <button className="btn btn-float navigation-button">
          <FilterAltIcon onClick={filterClickHandler} />
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
        {state.filterModalState ? <FilterCard /> : null}
      </div>
    </div>
  );
}
