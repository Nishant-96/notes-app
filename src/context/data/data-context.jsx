import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const useData = () => useContext(DataContext);

const initialState = {
  notesListArr: [],
  archiveListArr: [],
  trashListArr: [],
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
    case "REMOVE_FROM_LABEL_LIST":
      console.log(action.payload.value);
      state = {
        ...state,
        totalLabelList: [...state.totalLabelList].filter(
          (curr) => curr !== action.payload.value
        ),
      };
      break;
    case "PRIORITY_MODAL":
      state = { ...state, priorityModalState: action.payload.value };
      break;
    case "TRASH_NOTES_NOTE":
      state = {
        ...state,
        notesListArr: action.payload.notes,
        trashListArr: action.payload.trash,
      };
      break;
    case "ARCHIVE_NOTE":
      state = {
        ...state,
        notesListArr: action.payload.notes,
        archiveListArr: action.payload.archives,
      };
      break;
    case "TRASH_ARCHIVE_NOTE":
      state = {
        ...state,
        archiveListArr: action.payload.archives,
        trashListArr: action.payload.trash,
      };
      break;
    case "RESTORE_TRASH_NOTE":
      state = {
        ...state,
        notesListArr: action.payload.notes,
        trashListArr: action.payload.trash,
      };

      break;
    case "DELETE_TRASH_NOTE":
      state = { ...state, trashListArr: action.payload.trash };
      break;
    default:
      break;
  }
  console.log(state);
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
