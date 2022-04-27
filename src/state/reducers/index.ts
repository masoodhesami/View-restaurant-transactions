import {combineReducers} from "redux"
import basicDataReducer from "./basicDataReducer"
import sortArrayReducer from "../reducers/sortArrayReducer"

const reducers = combineReducers({
    transactionsData:basicDataReducer,
    allSortData: sortArrayReducer
});
export default reducers