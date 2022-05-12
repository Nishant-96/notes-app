import React, { useEffect } from "react";
import axios from "axios";
import { ArchiveNoteCard, SideNav } from "../../components";
import { useData } from "../../context/data/data-context";
import { useAuth } from "../../context/auth/auth-context";
import "./archive.css";
export function Archive() {
  const { state, dispatch } = useData();
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { archives },
        } = await axios.get(`/api/archives`, {
          headers: { authorization: token },
        });
        dispatch({ type: "GET_ARCHIVE", payload: { value: archives } });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [state.apiCallFlag, token]);

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
