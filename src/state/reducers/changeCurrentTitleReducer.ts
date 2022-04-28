import {CurrentTitle} from "../constanst/constants"
import {iTitleState} from "../interfaces"

const initialState = {
    currentTitle: {
        currentTitle: " "
    }
};

export type Action = {
    type: string,
    payload: iTitleState | string
}

const changeCurrentTitleReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case CurrentTitle.TITLE_CHANGE:
            return {
                ...state,
                currentTitle: action.payload
            };
        default:
            return state
    }
}

export default changeCurrentTitleReducer;