import {AllSortData} from "../constants";
import {iSortedState} from "../interfaces"


const initialState = {
    allSortData: {}
};

export type Action = {
    type: string,
    payload: iSortedState | []
}

const sortArrayReducer = (state: iSortedState | {} = initialState, action: Action) => {
    switch (action.type) {
        case AllSortData.SORT_SUCCESS:
            return {
                ...state,
                allSortData: action.payload,
            };
        default:
            return state;
    }
};

export default sortArrayReducer;