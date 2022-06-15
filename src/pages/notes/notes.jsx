import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { toast } from "react-toastify";

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
    editStatus: false,
  };
  const [notes, setNotes] = useState(initialData);

  useEffect(() => {
    setNotes(initialData);
  }, [theme]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { notes },
        } = await axios.get(`/api/notes`, {
          headers: { authorization: token },
        });
        dispatch({ type: "GET_NOTES", payload: { value: notes } });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [state.apiCallFlag, token]);
  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (
        state.labelModalState ||
        state.priorityModalState ||
        state.filterModalState
      ) {
        dispatch({ type: "PRIORITY_MODAL", payload: { value: false } });
        dispatch({ type: "LABEL_MODAL", payload: { value: false } });
        dispatch({ type: "FILTER_MODAL", payload: { value: false } });
      }
    };
    document.addEventListener("click", checkOutsideClick);
    return () => {
      document.removeEventListener("click", checkOutsideClick);
    };
  }, [state.labelModalState, state.filterModalState, state.priorityModalState]);

  function addNoteHandler() {
    if (notes._id !== "") {
      token && postNoteEditHandler(notes._id, notes, token, dispatch);
    } else {
      if (notes.noteTitle !== "" && notes.noteBody !== "<p><br></p>") {
        token && postNotesHandler(notes, token, dispatch);
      }
    }
    if (notes.noteTitle === "" || notes.noteBody === "<p><br></p>") {
      toast.info(`Make Sure To Fill Title and Body`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
              {notes.editStatus ? "Update Note" : "Add Note"}
            </div>
          </div>
        </div>

        <div className="note-list-wrapper">
          {[...state.filterNotesList].reverse().map((curr) => (
            <NoteCard key={curr._id} note={curr} setNoteState={setNotes} />
          ))}
        </div>
      </div>
    </div>
  );
}
