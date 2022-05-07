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

export const deleteNoteHandler = async (noteId, token, dispatch) => {
  try {
    const {
      data: { notes, trash },
    } = await axios.delete(`api/notes/${noteId}`, {
      headers: { authorization: token },
    });
    dispatch({ type: "TRASH_NOTES_NOTE", payload: { notes, trash } });
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
      data: { archives, trash },
    } = await axios.delete(`/api/archives/delete/${noteId}`, {
      headers: { authorization: token },
    });

    dispatch({ type: "TRASH_ARCHIVE_NOTE", payload: { archives, trash } });
  } catch (error) {
    console.error(error);
  }
};

export const postRestoreTrashHandler = async (
  noteId,
  note,
  token,
  dispatch
) => {
  try {
    const {
      data: { trash, notes },
    } = await axios.post(
      `/api/trash/restore/${noteId}`,
      { note },
      { headers: { authorization: token } }
    );
    dispatch({ type: "RESTORE_TRASH_NOTE", payload: { trash, notes } });
  } catch (error) {
    console.error(error);
  }
};
export const deleteTrashHandler = async (noteId, token, dispatch) => {
  try {
    const {
      data: { trash },
    } = await axios.delete(`/api/trash/delete/${noteId}`, {
      headers: { authorization: token },
    });
    dispatch({ type: "DELETE_TRASH_NOTE", payload: { trash } });
  } catch (error) {
    console.error(error);
  }
};
