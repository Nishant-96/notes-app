import React from "react";
import { useData } from "../../context/data/data-context";
import { LabelNoteCard } from "./labelNoteCard";
import "./notecard.css";
export function LabelPageCard({ labelName }) {
  const { state } = useData();

  const listArr = state.notesListArr.filter((curr) =>
    curr.tags.includes(labelName)
  );

  return (
    <div className="label-page-card">
      <div className="label-page-card-header">
        <span></span>
        {labelName}
      </div>
      <div className="label-page-card-body">
        {listArr.length === 0 ? (
          <h4>No Notes To show</h4>
        ) : (
          [...listArr]
            .reverse()
            .map((curr) => <LabelNoteCard key={curr._id} note={curr} />)
        )}
      </div>
    </div>
  );
}
