import React, { useEffect, useState } from "react";

import "./notes.css";
import LabelIcon from "@mui/icons-material/Label";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import {
  LabelModal,
  NoteCard,
  PriorityModal,
  RichTextEditor,
  SideNav,
} from "../../components";
import { useAuth } from "../../context/auth/auth-context";
import { postNoteEditHandler, postNotesHandler } from "../../utils";
import { useData } from "../../context/data/data-context";

export function Notes({ theme }) {
  const { token } = useAuth();
  const { state, dispatch } = useData();
  const date = new Date();
  const getCreationTime = () =>
    `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const initialData = {
    _id: "",
    noteTitle: "",
    noteBody: "<p><br></p>",
    backgroundColor: `${theme === "light-mode" ? "#ffffff" : "#0a1929"}`,
    createdAt: `${getCreationTime()}`,
    tags: [],
    priority: "Low",
  };
  const [notes, setNotes] = useState(initialData);

  useEffect(() => {
    setNotes(initialData);
    const checkOutsideClick = (e) => {
      if (state.labelModalState || state.priorityModalState) {
        dispatch({ type: "PRIORITY_MODAL", payload: { value: false } });
        dispatch({ type: "LABEL_MODAL", payload: { value: false } });
      }
    };
    document.addEventListener("click", checkOutsideClick);
    return () => {
      document.removeEventListener("click", checkOutsideClick);
    };
  }, [theme, state.labelModalState, state.priorityModalState]);

  function addNoteHandler() {
    if (notes._id !== "") {
      token && postNoteEditHandler(notes._id, notes, token, dispatch);
    } else {
      if (notes.noteTitle !== "" && notes.noteBody !== "<p><br></p>") {
        token && postNotesHandler(notes, token, dispatch);
      }
    }
    setNotes(initialData);
  }

  return (
    <div className="notes">
      <SideNav />
      <div className="note-wrapper">
        <div className="note-input-container">
          <input
            type="text"
            placeholder="Title"
            required
            value={notes.noteTitle}
            onChange={(event) =>
              setNotes((prev) => ({ ...prev, noteTitle: event.target.value }))
            }
          />
          <RichTextEditor
            value={notes.noteBody}
            setValue={(event) =>
              setNotes((prev) => ({ ...prev, noteBody: event }))
            }
          />
          <div className="note-input-footer">
            <div>
              <input
                type="color"
                value={notes.backgroundColor}
                onChange={(event) =>
                  setNotes((prev) => ({
                    ...prev,
                    backgroundColor: event.target.value,
                  }))
                }
              />
              <LabelIcon
                onClick={() =>
                  dispatch({ type: "LABEL_MODAL", payload: { value: true } })
                }
              />
              <SignalCellularAltIcon
                onClick={() =>
                  dispatch({ type: "PRIORITY_MODAL", payload: { value: true } })
                }
              />
              <LabelModal noteState={notes} setNoteState={setNotes} />
              <PriorityModal noteState={notes} setNoteState={setNotes} />
            </div>

            <div
              className="note-input-btn"
              onClick={() => {
                setNotes((prev) => ({
                  ...prev,
                  createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                }));
                addNoteHandler();
              }}
            >
              Add Note
            </div>
          </div>
        </div>

        <div className="note-list-wrapper">
          {state.notesListArr.map((curr) => (
            <NoteCard key={curr._id} note={curr} setNoteState={setNotes} />
          ))}
        </div>
      </div>
    </div>
  );
}
