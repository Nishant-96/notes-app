import React from "react";
import { SideNav } from "../../components";
import "./label.css";
export function Label() {
  return (
    <div className="notes">
      <SideNav />
      <div className="label-wrapper">
        <h4>No Notes in Label</h4>
      </div>
    </div>
  );
}
