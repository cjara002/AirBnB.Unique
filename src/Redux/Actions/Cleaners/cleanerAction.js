import axios from "axios";

export const getCleaners = (dispatch) => {
  return (dispatch) => {
  dispatch({ type: "FETCH_CLEANERS_START" });
  axios
    .get("https://localhost:5001/api/cleaners")
    .then((response) => {
      dispatch({
        type: "RECEIVE_CLEANERS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "FETCH_CLEANERS_ERROR",
        payload: error,
      });
    });
  }
};

export const addCleaner = (user) => {
  return (dispatch) => {
    axios
      .post("https://localhost:5001/api/cleaners",  user )
      .then((response) => {
        dispatch({
          type: "ADD_CLEANER",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_CLEANER_ERROR",
          payload: error,
        });
      });
  };
};

export const GetSingleCleaner = (id) => {
  // debugger;
  return (dispatch) => {
    axios
      .get(`https://localhost:5001/api/cleaners/${id}` )
      .then((response) => {
        dispatch({
          type: "GET_SINGLE_CLEANER",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_SINGLE_CLEANER_ERROR",
          payload: error,
        });
      });
  };
};
export const updateCleaner = (user) => {
  // debugger;
  return (dispatch) => {
    axios
      // .put("https://localhost:5001/api/cleaners/", user )
      .put(`https://localhost:5001/api/cleaners/${user.id}`, user )
      .then((response) => {
        dispatch({
          type: "UPDATE_CLEANER",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_CLEANER_ERROR",
          payload: error,
        });
      });
  };
};
export const deleteCleaner = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://localhost:5001/api/cleaners/${id}` )
      .then((response) => {
        dispatch({
          type: "DELETE_CLEANER",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_CLEANER_ERROR",
          payload: error,
        });
      });
  };
};
