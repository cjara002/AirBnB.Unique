import { createStore } from "redux";
import middleware from "./Redux/MiddleWare/middleware"
import reducer from "./Redux/Reducer/cleanerReducer"

const Store = createStore(reducer, middleware);

export default Store;