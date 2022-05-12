import axios from "axios";
import { toast } from "react-toastify";

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
    toast.success(`Note Created`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.error(error);
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    toast.success(`Note Edited`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.error(error);
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    toast.success(`Moved To Trash`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.error(error);
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    toast.success(`Note Archived`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.error(error);
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    toast.success(`Note Unarchived`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.error(error);
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    toast.success(`Moved To Trash`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.error(error);
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    toast.success(`Note Restored`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.error(error);
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    toast.success(`Note Deleted`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    console.error(error);
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
