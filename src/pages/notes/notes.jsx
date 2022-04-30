import "./notes.css";

import React from "react";
import LabelIcon from "@mui/icons-material/Label";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import { RichTextEditor, SideNav } from "../../components";
export function Notes() {
  return (
    <div className="notes">
      <SideNav />
      <div className="note-wrapper">
        <div className="note-input-container">
          <input type="text" placeholder="Title" required />
          <RichTextEditor />
          <div className="note-input-footer">
            <div>
              <input type="color" />
              <LabelIcon />
              <SignalCellularAltIcon />
            </div>
            <div className="note-input-btn">Add Note</div>
          </div>
        </div>
        {/* here cards will go */}
      </div>
    </div>
  );
}
