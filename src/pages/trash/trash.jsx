import React from "react";
import { SideNav, TrashNoteCard } from "../../components";
import { useData } from "../../context/data/data-context";
import "../archive/archive.css";
export function Trash() {
  const { state } = useData();

  return (
    <div className="notes">
      <SideNav />
      {state.trashListArr.length === 0 ? (
        <div className="archive-wrapper">
          <h4>No Notes in Trash</h4>
        </div>
      ) : (
        <div className="archive-wrapper">
          <div className="archive-list-container">
            {[...state.trashListArr].reverse().map((curr) => (
              <TrashNoteCard key={curr._id} note={curr} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
