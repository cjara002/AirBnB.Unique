import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const logger = (Store) => (next) => (action) => {
    console.log("action fired", action);
    // what does the next action do?
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

  export default middleware;