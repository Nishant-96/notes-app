import axios from "axios";
import { toast } from "react-toastify";

export const postNotesHandler = async (note, token, dispatch) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      dispatch({ type: "API_FLAG_TOGGLE" });
      toast.success(`Note Created`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
    const response = await axios.post(
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
    if (response.status === 201) {
      dispatch({ type: "API_FLAG_TOGGLE" });
      toast.success(`Note Edited`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
    const response = await axios.delete(`api/notes/${noteId}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      dispatch({ type: "API_FLAG_TOGGLE" });
      toast.success(`Moved To Trash`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
    const response = await axios.post(
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
    if (response.status === 201) {
      dispatch({ type: "API_FLAG_TOGGLE" });
      toast.success(`Note Archived`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
    const response = await axios.post(
      `/api/archives/restore/${noteId}`,
      { note },
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 200) {
      dispatch({ type: "API_FLAG_TOGGLE" });
      toast.success(`Note Unarchived`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
    const response = await axios.delete(`/api/archives/delete/${noteId}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      dispatch({ type: "API_FLAG_TOGGLE" });
      toast.success(`Moved To Trash`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
    const response = await axios.post(
      `/api/trash/restore/${noteId}`,
      { note },
      { headers: { authorization: token } }
    );

    if (response.status === 200) {
      dispatch({ type: "API_FLAG_TOGGLE" });
      toast.success(`Note Restored`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
    const response = await axios.delete(`/api/trash/delete/${noteId}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      dispatch({ type: "API_FLAG_TOGGLE" });
      toast.success(`Note Deleted`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
