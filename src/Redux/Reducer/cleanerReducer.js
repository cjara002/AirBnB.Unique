const intialState = {
  fetching: false,
  fetched: false,
  cleaners: [],
  singleCleaner: [],
  error: null,
};

const cleanerReducer = (state = intialState, action) => {
  // debugger;
  switch (action.type) {
    case "FETCH_CLEANERS_START": {
      return { ...state, fetching: true };
    }
    case "FETCH_CLEANERS_ERROR": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "RECEIVE_CLEANERS": {
      state = {
        ...state,
        fetching: true,
        fetched: true,
        cleaners: action.payload,
      };
      break;
    }
    case "ADD_CLEANER": {
        const newCleaner = state.cleaners.concat(action.payload)
      state = {
        ...state,
        fetching: true,
        fetched: true,
        newCleaner
      };
      break;
    }
    case "ADD_CLEANERS_ERROR": {
        return { ...state, fetching: false, error: action.payload };
      }
    case "GET_SINGLE_CLEANER": {
        const singleCleaner = action.payload
      state = {
        ...state,
        fetching: true,
        fetched: true,
        singleCleaner
      };
      break;
    }
    case "GET_SINGLE_CLEANER_ERROR": {
        return { ...state, fetching: false, error: action.payload };
      }
    default: {
      break;
    }
  }
  return state;
};

export default cleanerReducer;
