import Transactions from "../constants";

export interface iState {
    transactionsData: {
        trip_financials: {
                id:Number,
                request_datetime:String,
                driver:String,
                final_price:Number,
                source_title:String,
                hub:{
                    id:Number,
                    title:String
                }
            }[]
        , payments: {
                id:Number,
                datetime:String,
                amount:Number,
                description:null
            }[]
        , misc_expenses: {
                id:Number,
                title:String,
                created_at:String,
                amount:Number
            }[]
        , concurrency_costs: {
                id:Number,
                created_at:String,
                amount:Number,
                start_date:String,
                end_date:String
            }[]
    }
}

const initialState = {
    transactionsData: {}
};

export type Action = {
    type: string,
    payload:iState | {}
}

const reducer = (state:iState|{}= initialState, action: Action) => {
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