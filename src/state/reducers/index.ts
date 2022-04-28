import {combineReducers} from "redux"
import basicDataReducer from "./basicDataReducer"
import sortArrayReducer from "../reducers/sortArrayReducer"
import changeCurrentTitleReducer from "../reducers/changeCurrentTitleReducer"

const reducers = combineReducers({
    transactionsData: basicDataReducer,
    allSortData: sortArrayReducer,
    currentTitle: changeCurrentTitleReducer
});
export default reducers