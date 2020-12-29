const intialState = {
setSidebar: false,
  fetching: false,
  fetched: false,
  error: null,
};

const actionReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_INITIAL_TOGGLE": {
      return { ...state, fetching: true };
    }
    case "FETCH_INITIAL_TOGGLE_ERROR": {
      return { ...state, fetching: false, 
    //   error: action.payload 
      };
    }
    // case "RECEIVE_CLEANERS": {
    //   state = {
    //     ...state,
    //     fetching: true,
    //     fetched: true,
    //     cleaners: action.payload,
    //   };
    //   break;
    // }
        default: {
      break;
    }
  }
  return state;
};

export default actionReducer;
