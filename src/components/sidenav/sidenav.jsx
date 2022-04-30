import "./sidenav.css";

import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import LabelIcon from "@mui/icons-material/Label";
import { NavLink } from "react-router-dom";
export function SideNav() {
  return (
    <div className="sidenav">
      <NavLink
        to="/notes"
      >
        <div className="sidenav-section">
          <DescriptionIcon />
          <p>Notes</p>
        </div>
      </NavLink>
      <NavLink
        to="/label"
       
      >
        <div className="sidenav-section">
          <LabelIcon />
          <p>Label</p>
        </div>
      </NavLink>
      <NavLink
        to="/archive"
       
      >
        <div className="sidenav-section">
          <ArchiveIcon />
          <p>Archive</p>
        </div>
      </NavLink>
      <NavLink
        to="/trash"
      >
        <div className="sidenav-section">
          <DeleteIcon />
          <p>Bin</p>
        </div>
      </NavLink>
    </div>
  );
}
