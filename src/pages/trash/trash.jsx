import React from "react";
import { SideNav } from "../../components";
import "./trash.css";
export function Trash() {
  return (
    <div className="notes">
      <SideNav />
      <div className="trash-wrapper">
        <h4>No Notes in Trash</h4>
      </div>
    </div>
  );
}
