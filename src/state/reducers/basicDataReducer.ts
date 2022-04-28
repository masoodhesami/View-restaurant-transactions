import {Transactions} from "../constanst/constants";
import {iState} from "../interfaces"


const initialState = {
    transactionsData: {}
};

export type Action = {
    type: string,
    payload: iState | {}
}

const basicDataReducer = (state: iState | {} = initialState, action: Action) => {
    switch (action.type) {
        case Transactions.LOAD_SUCCESS:
            return {
                ...state,
                transactionsData: action.payload,
            };
        default:
            return state;
    }
};

export default basicDataReducer;