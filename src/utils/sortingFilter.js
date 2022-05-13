export function sortingFilter(state, condition) {
  const priorityMap = { low: 1, medium: 2, high: 3 };
  switch (condition) {
    case "newest":
      return [...state.filterNotesList].sort((a, b) => {
        const timeOne =
          a.createdAt.split(" ")[0].split("/").reverse().join("/") +
          " " +
          a.createdAt.split(" ")[1];
        const timeTwo =
          b.createdAt.split(" ")[0].split("/").reverse().join("/") +
          " " +
          b.createdAt.split(" ")[1];
        return new Date(timeOne) - new Date(timeTwo);
      });
    case "oldest":
      return [...state.filterNotesList].sort((a, b) => {
        const timeOne =
          a.createdAt.split(" ")[0].split("/").reverse().join("/") +
          " " +
          a.createdAt.split(" ")[1];
        const timeTwo =
          b.createdAt.split(" ")[0].split("/").reverse().join("/") +
          " " +
          b.createdAt.split(" ")[1];
        return new Date(timeTwo) - new Date(timeOne);
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
