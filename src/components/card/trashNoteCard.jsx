import React from "react";

import "./notecard.css";
import RestoreIcon from "@mui/icons-material/Restore";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../../context/auth/auth-context";
import { useData } from "../../context/data/data-context";
import { deleteTrashHandler, postRestoreTrashHandler } from "../../utils";
export function TrashNoteCard({ note }) {
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
          <RestoreIcon
            onClick={() =>
              postRestoreTrashHandler(note._id, note, token, dispatch)
            }
          />
          <DeleteIcon
            onClick={() => deleteTrashHandler(note._id, token, dispatch)}
          />
        </div>
      </div>
    </div>
  );
}
