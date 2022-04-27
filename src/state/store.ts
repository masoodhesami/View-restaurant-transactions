import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));