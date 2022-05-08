import React from "react";
import { LabelPageCard, SideNav } from "../../components";
import { useData } from "../../context/data/data-context";
import "./label.css";
export function Label() {
  const { state } = useData();

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
