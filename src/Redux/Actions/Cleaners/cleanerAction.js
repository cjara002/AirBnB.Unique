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
