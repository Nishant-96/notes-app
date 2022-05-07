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
    console.error(error);
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
    console.error(error);
  }
};

export const postArchiveNoteHandler = async (noteId, note, token, dispatch) => {
  try {
    const {
      data: { archives, notes },
    } = await axios.post(
      `/api/notes/archives/${noteId}`,
      {
        note,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: "ARCHIVE_NOTE", payload: { notes, archives } });
  } catch (error) {
    console.error(error);
  }
};

export const postRestoreArchiveHandler = async (
  noteId,
  note,
  token,
  dispatch
) => {
  try {
    const {
      data: { archives, notes },
    } = await axios.post(
      `/api/archives/restore/${noteId}`,
      { note },
      {
        headers: { authorization: token },
      }
    );
    dispatch({ type: "ARCHIVE_NOTE", payload: { notes, archives } });
  } catch (error) {
    console.error(error);
  }
};

export const deleteArchiveNoteHandler = async (noteId, token, dispatch) => {
  try {
    const {
      data: { archives },
    } = await axios.delete(`/api/archives/delete/${noteId}`, {
      headers: { authorization: token },
    });
    dispatch({ type: "DELETE_ARCHIVE_NOTE", payload: { archives } });
  } catch (error) {
    console.error(error);
  }
};
