import React from "react";
import { ArchiveNoteCard, SideNav } from "../../components";
import { useData } from "../../context/data/data-context";
import "./archive.css";
export function Archive() {
  const { state } = useData();

  return (
    <div className="notes">
      <SideNav />
      {state.archiveListArr.length === 0 ? (
        <div className="archive-wrapper">
          <h4>No Notes in Archive</h4>
        </div>
      ) : (
        <div className="archive-wrapper">
          <div className="archive-list-container">
            {[...state.archiveListArr].reverse().map((curr) => (
              <ArchiveNoteCard key={curr._id} note={curr} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
