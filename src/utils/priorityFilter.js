export function priorityFilter(state, priorityList) {
  return [...state.filterNotesList].filter((curr) => {
    for (let i = 0; i < priorityList.length; i++) {
      if (curr.priority === priorityList[i]) {
        return curr;
      }
    }
    return null;
  });
}
