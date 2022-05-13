import React, { useEffect } from "react";
import axios from "axios";
import { SideNav, TrashNoteCard } from "../../components";
import { useAuth } from "../../context/auth/auth-context";
import { useData } from "../../context/data/data-context";
import "../archive/archive.css";
export function Trash() {
  const { state, dispatch } = useData();
  const { token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { trash },
        } = await axios.get(`/api/trash`, {
          headers: { authorization: token },
        });
        dispatch({ type: "GET_TRASH", payload: { value: trash } });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [state.apiCallFlag, token]);

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
