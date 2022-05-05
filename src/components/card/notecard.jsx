import React from "react";
import "./notecard.css";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export function NoteCard({ note, setNoteState }) {
  function editClickHandler() {
    setNoteState(note);
  }
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
          <EditIcon onClick={editClickHandler} />
          <ArchiveIcon />
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}
