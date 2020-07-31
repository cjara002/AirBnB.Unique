// import { combineReducers, createStore } from "redux";
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
// import logger from "redux-logger";
import thunk from "redux-thunk";

const logger = (Store) => (next) => (action) => {
  console.log("action fired", action);
  next(action);
}

const error = (Store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log("action not completed", e)
  }
}

// const middleware = applyMiddleware(logger, error);
const middleware = applyMiddleware(thunk, logger, error);

// const profileReducer = (state={}, action) => {
//   switch(action.type) {
//     case "LOAD_PROFILES": {
//     state = {...state, profile: action.payload}
//     break;
//     }
//      default:{
//       break;
//     }
//   }
//   return state;
// }

// const  reducers = combineReducers({ 
//   profile: profileReducer
// })

const intialState= {
fetching: false, 
fetched: false, 
cleaners: [],
error: null,
}

const  reducer = (state = intialState, action) => {
  switch(action.type) {
        case "FETCH_CLEANERS_START": {
        return {...state, fetching: true }

        }
        case "FETCH_CLEANERS_ERROR": {
        return {...state, fetching: false, error: action.payload}

        }
        case "RECEIVE_CLEANERS": {
        state = {...state, fetching: true, fetched: true, cleaners: action.payload}
        break;
        }
         default:{
          break;
        }
      }
      return state;
} 
   
// const Store = createStore(reducers);

const Store = createStore(reducer, middleware);

// Store.subscribe(() => {
//   console.log("store changed", Store.getState())
// })

// Store.dispatch({type: "LOAD_PROFILES", payload: ""})
Store.dispatch((dispatch) => {
  dispatch({type: "FETCH_CLEANERS_START"})
  // axios.get("process.env.REACT_APP_API_HOST_PREFIX/api/profile") gave me 404
  // axios.get("/api/profile")
  // axios.get("https://localhost:3000/api/profile")
  axios.get("https://localhost:5001/api/cleaners")
  .then((response) => {
    dispatch({ type: "RECEIVE_CLEANERS", payload: response.data})
  })
  .catch((error) => {
    dispatch({type: "FETCH_CLEANERS_ERROR", payload: error})
  })
})

export default Store;