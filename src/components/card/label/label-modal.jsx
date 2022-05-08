import React, { useState } from "react";
import "./label.css";
import CloseIcon from "@mui/icons-material/Close";
import { useData } from "../../../context/data/data-context";
export function LabelModal({ noteState, setNoteState }) {
  const { state, dispatch } = useData();
  const [label, setLabel] = useState({ name: "" });

  function labelCreateHandler() {
    if (label.name !== "" && !state.totalLabelList.includes(label.name)) {
      dispatch({ type: "LABEL_LIST_ARR", payload: { value: label.name } });
    }
    setLabel((prev) => ({ ...prev, name: "" }));
  }

  function labelCheckHandler(event) {
    setNoteState((prev) => ({
      ...prev,
      tags: [...noteState.tags, event.target.value],
    }));
  }

  if (!state.labelModalState) return null;
  return (
    <div
      className="modal-container"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="modal modal-wrapper">
        <div className="modal-header">
          <h3>Save To</h3>
          <CloseIcon
            onClick={() =>
              dispatch({ type: "LABEL_MODAL", payload: { value: false } })
            }
          />
        </div>
        <div className="modal-body">
          {state.totalLabelList.map((curr, index) => (
            <label key={index}>
              <input
                name="playlist-list"
                id={curr}
                value={curr}
                type="radio"
                onChange={labelCheckHandler}
              />
              {curr}
            </label>
          ))}

          <div className="modal-body-creater">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Label Name"
              value={label.name}
              onChange={(event) =>
                setLabel((prev) => ({ ...prev, name: event.target.value }))
              }
            />
          </div>
        </div>

        <button
          className="btn btn-primary modal-button"
          onClick={labelCreateHandler}
        >
          Create Label
        </button>
      </div>
    </div>
  );
}
