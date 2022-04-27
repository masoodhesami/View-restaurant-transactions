export interface iState {
    transactionsData: {
    transactionsData: {
        trip_financials: {
            id: Number,
            request_datetime: String,
            driver: String,
            final_price: Number,
            source_title: String,
            hub: {
                id: Number,
                title: String
            }
        }[], payments: {
            id: Number,
            datetime: String,
            amount: Number,
            description: null
        }[], misc_expenses: {
            id: Number,
            title: String,
            created_at: String,
            amount: Number
        }[], concurrency_costs: {
            id: Number,
            created_at: String,
            amount: Number,
            start_date: String,
            end_date: String
        }[]
    }
}}
export interface iSortedState {
    allSortData: {
        allSortData: {
            id: Number,
            title: String,
            datetime: String,
            amount: Number,
            driver: String,
            description: null,
            hub: {
                id: Number,
                title: String,
            },
            start_date: String,
            end_date: String
        }[]
    }
}