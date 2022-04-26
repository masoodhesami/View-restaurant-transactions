import Transactions from "../constants";

const initialState = {
    transactionsData: {},
};

export type Action = {
    type: string,
    payload: Object
}

const reducer = (state = initialState, action: Action) => {
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

export default reducer;
export type state = ReturnType<typeof reducer>