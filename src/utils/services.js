import axios from "axios";

export const postNotesHandler = async (note, token, dispatch) => {
  try {
    const {
      data: { notes },
    } = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "ADD_NOTE", payload: { value: notes } });
  } catch (error) {
    console.log(error);
  }
};

export const postNoteEditHandler = async (noteId, note, token, dispatch) => {
  try {
    const {
      data: { notes },
    } = await axios.post(
      `/api/notes/${noteId}`,
      {
        note,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "ADD_NOTE", payload: { value: notes } });
  } catch (error) {
    console.log(error);
  }
};
