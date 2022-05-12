import React from "react";
import { useData } from "../../context/data/data-context";

import "./filter.css";
export function FilterCard() {
  const { state, dispatch } = useData();
  return (
    <div className="filter" onClick={(event) => event.stopPropagation()}>
      <button
        className="btn btn-primary modal-button"
        onClick={() => dispatch({ type: "CLEAR_FILTER" })}
      >
        Clear All
      </button>
      <div className="filter-wrapper">
        <div className="filter-left">
          <div>
            <h4>Sort By Priority</h4>
            <label>
              <input
                name="priority-sort"
                value="low-to-high"
                type="radio"
                checked={
                  state.selectedPrioritySort === "low-to-high" ? true : false
                }
                onChange={(event) =>
                  dispatch({
                    type: "PRIORITY_SORTING_FILTER",
                    payload: { value: event.target.value },
                  })
                }
              />
              Low-To-High
            </label>
            <label>
              <input
                name="priority-sort"
                value="high-to-low"
                type="radio"
                checked={
                  state.selectedPrioritySort === "high-to-low" ? true : false
                }
                onChange={(event) =>
                  dispatch({
                    type: "PRIORITY_SORTING_FILTER",
                    payload: { value: event.target.value },
                  })
                }
              />
              High-To-Low
            </label>
          </div>
          <div>
            <h4>Sort By Time</h4>
            <label>
              <input
                name="time-sort"
                value="newest"
                type="radio"
                checked={state.selectedTimeSort === "newest" ? true : false}
                onChange={(event) =>
                  dispatch({
                    type: "TIME_SORTING_FILTER",
                    payload: { value: event.target.value },
                  })
                }
              />
              Newest
            </label>
            <label>
              <input
                name="time-sort"
                value="oldest"
                type="radio"
                checked={state.selectedTimeSort === "oldest" ? true : false}
                onChange={(event) =>
                  dispatch({
                    type: "TIME_SORTING_FILTER",
                    payload: { value: event.target.value },
                  })
                }
              />
              Oldest
            </label>
          </div>
        </div>
        <div className="filter-right">
          <div>
            <h4>Filter By Priority</h4>
            {state.totalPriorityList.map((curr, index) => (
              <label key={index}>
                <input
                  name="priority-list"
                  id={curr}
                  value={curr}
                  type="checkbox"
                  checked={state.selectedPriority.includes(curr)}
                  onChange={(event) =>
                    dispatch({
                      type: "PRIORITY_FILTERING_FILTER",
                      payload: {
                        value: event.target.value,
                        checked: event.target.checked,
                      },
                    })
                  }
                />
                {curr}
              </label>
            ))}
          </div>
          {state.totalLabelList.length > 0 && (
            <div>
              <h4>Filter By Label</h4>
              {state.totalLabelList.map((curr, index) => (
                <label key={index}>
                  <input
                    name="label-list"
                    id={curr}
                    value={curr}
                    type="checkbox"
                    checked={state.selectedLabels.includes(curr)}
                    onChange={(event) =>
                      dispatch({
                        type: "LABEL_FILTERING_FILTER",
                        payload: {
                          value: event.target.value,
                          checked: event.target.checked,
                        },
                      })
                    }
                  />
                  {curr}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
