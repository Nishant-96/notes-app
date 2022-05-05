import React from "react";

import "./label.css";
import CloseIcon from "@mui/icons-material/Close";
import { useData } from "../../../context/data/data-context";
export function PriorityModal({ noteState, setNoteState }) {
  const { state, dispatch } = useData();

  function priorityCheckHandler(event) {
    setNoteState((prev) => ({ ...prev, priority: event.target.value }));
  }

  if (!state.priorityModalState) return null;
  return (
    <div
      className="modal-container priority-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="modal modal-wrapper">
        <div className="modal-header priority-modal-header">
          <h3>Save To</h3>
          <CloseIcon
            onClick={() =>
              dispatch({ type: "PRIORITY_MODAL", payload: { value: false } })
            }
          />
        </div>
        <div className="modal-body">
          {state.totalPriorityList.map((curr, index) => (
            <label key={index}>
              <input
                name="priority-list"
                id={curr}
                value={curr}
                type="radio"
                onChange={priorityCheckHandler}
              />
              {curr}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
