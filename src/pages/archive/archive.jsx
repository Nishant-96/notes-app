import React from "react";
import { SideNav } from "../../components";
import "./archive.css";
export function Archive() {
  return (
    <div className="notes">
      <SideNav />
      <div className="archive-wrapper">
        <h4>No Notes in Archive</h4>
      </div>
    </div>
  );
}
