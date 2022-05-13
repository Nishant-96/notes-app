import React, { useEffect } from "react";
import axios from "axios";
import { LabelPageCard, SideNav } from "../../components";
import { useData } from "../../context/data/data-context";
import { useAuth } from "../../context/auth/auth-context";
import "./label.css";
export function Label() {
  const { state, dispatch } = useData();
  const { token } = useAuth();

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

  return (
    <div className="notes">
      <SideNav />

      {state.totalLabelList.length === 0 ? (
        <div className="label-wrapper">
          <h4>No Notes in Label</h4>
        </div>
      ) : (
        <div className="label-wrapper label-list-wrapper">
          {state.totalLabelList.map((curr, index) => (
            <LabelPageCard key={index} labelName={curr} />
          ))}
        </div>
      )}
    </div>
  );
}
