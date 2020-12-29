import { createStore, 
//compose
 } from "redux";
import middleware from "./Redux/MiddleWare/middleware"
import reducer from "./Redux/Reducer/cleanerReducer"
// import actionReducer from "./Redux/Reducer/actionReducer"

// const enhancers = [actionReducer, middleware];

// const Store = createStore(
//     reducer,
//     compose(...enhancers)
// );

const Store = createStore( reducer, middleware);

export default Store;