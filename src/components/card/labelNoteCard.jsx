import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useData } from "../../context/data/data-context";
import { deleteNoteHandler, postArchiveNoteHandler } from "../../utils";
import { useAuth } from "../../context/auth/auth-context";
export function LabelNoteCard({ note }) {
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
          <ArchiveIcon
            onClick={() =>
              postArchiveNoteHandler(note._id, note, token, dispatch)
            }
          />
          <DeleteIcon
            onClick={() => deleteNoteHandler(note._id, token, dispatch)}
          />
        </div>
      </div>
    </div>
  );
}
