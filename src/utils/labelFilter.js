export function labelFilter(state, labelList) {
  return [...state.filterNotesList].filter((curr) => {
    for (let i = 0; i < labelList.length; i++) {
      if (curr.tags.includes(labelList[i])) {
        return curr;
      }
    }
    return null;
  });
}
