import React from "react";

import "./notecard.css";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteArchiveNoteHandler,
  postRestoreArchiveHandler,
} from "../../utils";
import { useAuth } from "../../context/auth/auth-context";
import { useData } from "../../context/data/data-context";
export function ArchiveNoteCard({ note }) {
  const { token } = useAuth();
  const { dispatch } = useData();
  return (
    <div
      className="card card-shadow note-card"
      style={{ backgroundColor: note.backgroundColor }}
    >
      <div className="note-card-header">
        <div>{note.priority}</div>
      </div>
      <h3 className="card-title">{note.noteTitle}</h3>
      <p dangerouslySetInnerHTML={{ __html: note.noteBody }} />
      <div className="note-card-footer">
        <p>{note.createdAt}</p>
        <div className="note-card-footer-icons">
          <UnarchiveIcon
            onClick={() =>
              postRestoreArchiveHandler(note._id, note, token, dispatch)
            }
          />
          <DeleteIcon
            onClick={() => deleteArchiveNoteHandler(note._id, token, dispatch)}
          />
        </div>
      </div>
    </div>
  );
}
