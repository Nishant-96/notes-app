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
  filterModalState: false,
  totalPriorityList: ["Low", "Medium", "High"],
  selectedPrioritySort: null,
  selectedTimeSort: null,
  selectedPriority: [],
  selectedLabels: [],
  filterNotesList: [],
  searchInput: "",
  searchedNotesList: [],
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
    case "FILTER_MODAL":
      state = { ...state, filterModalState: action.payload.value };
      break;
    case "PRIORITY_SORTING_FILTER":
      state = { ...state, selectedPrioritySort: action.payload.value };
      break;
    case "TIME_SORTING_FILTER":
      state = { ...state, selectedTimeSort: action.payload.value };
      break;
    case "PRIORITY_FILTERING_FILTER":
      state = {
        ...state,
        selectedPriority: action.payload.checked
          ? [...state.selectedPriority, action.payload.value]
          : [...state.selectedPriority].filter(
              (curr) => curr !== action.payload.value
            ),
      };
      break;
    case "LABEL_FILTERING_FILTER":
      state = {
        ...state,
        selectedLabels: action.payload.checked
          ? [...state.selectedLabels, action.payload.value]
          : [...state.selectedLabels].filter(
              (curr) => curr !== action.payload.value
            ),
      };
      break;
    case "CLEAR_FILTER":
      state = {
        ...state,
        selectedPrioritySort: null,
        selectedTimeSort: null,
        selectedPriority: [],
        selectedLabels: [],
        filterNotesList: [...state.notesListArr],
      };
      break;
    case "SET_SEARCH_INPUT":
      state = { ...state, searchInput: action.payload.value };
      break;
    case "SEARCH_NOTE":
      state = {
        ...state,
        searchedNotesList: [...state.notesListArr].filter((curr) =>
          curr.noteTitle
            .toLowerCase()
            .includes(action.payload.value.toLowerCase())
        ),
      };
      break;
    default:
      break;
  }

  state = { ...state, filterNotesList: [...state.notesListArr] };

  if (state.searchedNotesList.length > 0) {
    state = { ...state, filterNotesList: [...state.searchedNotesList] };
  }

  if (state.selectedTimeSort) {
    state = {
      ...state,
      filterNotesList: sortingFilter(state, state.selectedTimeSort),
    };
  }
  if (state.selectedPrioritySort) {
    state = {
      ...state,
      filterNotesList: sortingFilter(state, state.selectedPrioritySort),
    };
  }

  if (state.selectedPriority.length > 0) {
    state = {
      ...state,
      filterNotesList: priorityFilter(state, state.selectedPriority),
    };
  }

  if (state.selectedLabels.length > 0) {
    state = {
      ...state,
      filterNotesList: labelFilter(state, state.selectedLabels),
    };
  }

  return state;
}

function labelFilter(state, labelList) {
  return [...state.filterNotesList].filter((curr) => {
    for (let i = 0; i < labelList.length; i++) {
      if (curr.tags.includes(labelList[i])) {
        return curr;
      }
    }
    return null;
  });
}

function priorityFilter(state, priorityList) {
  return [...state.filterNotesList].filter((curr) => {
    for (let i = 0; i < priorityList.length; i++) {
      if (curr.priority === priorityList[i]) {
        return curr;
      }
    }
    return null;
  });
}

function sortingFilter(state, condition) {
  const priorityMap = { low: 1, medium: 2, high: 3 };
  switch (condition) {
    case "newest":
      return [...state.filterNotesList].sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    case "oldest":
      return [...state.filterNotesList].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    case "high-to-low":
      return [...state.filterNotesList].sort(
        (a, b) =>
          priorityMap[a.priority.toLowerCase()] -
          priorityMap[b.priority.toLowerCase()]
      );

    case "low-to-high":
      return [...state.filterNotesList].sort(
        (a, b) =>
          priorityMap[b.priority.toLowerCase()] -
          priorityMap[a.priority.toLowerCase()]
      );
    default:
      break;
  }
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
