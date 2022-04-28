import {CurrentTitle} from "../constanst/constants";
import {Dispatch} from "redux";
import {Action} from "../reducers/changeCurrentTitleReducer"
import {iTitleState} from "../interfaces"


export const changeCurrentTitle = (title: iTitleState | string): any => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({
            type: CurrentTitle.TITLE_CHANGE,
            payload: title,
        });
    } catch (e) {
        dispatch({
            type: CurrentTitle.TITLE_CHANGE,
            payload: title,
        });
    }
};