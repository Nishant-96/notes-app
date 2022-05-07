import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const useData = () => useContext(DataContext);

const initialState = {
  notesListArr: [],
  archiveListArr: [],
  labelModalState: false,
  totalLabelList: [],
  priorityModalState: false,
  totalPriorityList: ["Low", "Medium", "High"],
};

function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      state = { ...state, notesListArr: action.payload.value };
      break;
    case "LABEL_MODAL":
      state = { ...state, labelModalState: action.payload.value };
      break;

    case "LABEL_LIST_ARR":
      state = {
        ...state,
        totalLabelList: [...state.totalLabelList, action.payload.value],
      };
      break;
    case "PRIORITY_MODAL":
      state = { ...state, priorityModalState: action.payload.value };
      break;
    case "ARCHIVE_NOTE":
      state = {
        ...state,
        notesListArr: action.payload.notes,
        archiveListArr: action.payload.archives,
      };
      break;
    case "DELETE_ARCHIVE_NOTE":
      state = {
        ...state,
        archiveListArr: action.payload.archives,
      };
      break;
    default:
      break;
  }

  return state;
}

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export { useData, DataProvider };
