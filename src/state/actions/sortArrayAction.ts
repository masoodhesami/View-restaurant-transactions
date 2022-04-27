import {AllSortData} from "../constants";
import {Dispatch} from "redux";
import {Action} from "../reducers/basicDataReducer"
import {iSortedState} from "../interfaces"

export const setSortedData = (sortedData: iSortedState | []): any => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: AllSortData.Sort_SUCCESS,
            payload: sortedData,
        });
    } catch (e) {
        dispatch({
            type: AllSortData.Sort_SUCCESS,
            payload: {},
        });
    }
};