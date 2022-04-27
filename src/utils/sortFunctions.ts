export const sortArrayPayments = (trans_data: any) => {
    const sortArray:any = []
    if (trans_data) {
        trans_data.sort(function (a: any, b: any) {
            const date1 = new Date(a.datetime);
            const date2 = new Date(b.datetime);
            return Number(date2) - Number(date1)
        });
        for (const element of trans_data) {
            const object = {
                id: -1,
                title: "بدون عنوان",
                datetime: "",
                amount: -1,
                driver: "",
                description: null,
                hub: {
                    id: -1,
                    title: ""
                },
                start_date: "",
                end_date: ""
            }
            object.id = element.id
            object.datetime = element.datetime
            object.amount = element.amount
            object.description = element.description
            sortArray.push(object)
        }
        return sortArray
    }
}

export const sortArrayTrip_financials = (trans_data: any) => {
    const sortArray:any = []
    if (trans_data) {
        trans_data.sort(function (a: any, b: any) {
            const date1 = new Date(a.request_datetime);
            const date2 = new Date(b.request_datetime);
            return Number(date2) - Number(date1)
        });
        for (const element of trans_data) {
            const object = {
                id: -1,
                title: "بدون عنوان",
                datetime: "",
                amount: -1,
                driver: "",
                description: null,
                hub: {
                    id: -1,
                    title: "",
                },
                start_date: "",
                end_date: ""
            }
            object.id = element.id
            object.datetime = element.request_datetime
            object.amount = element.final_price
            object.driver = element.driver
            object.title = element.source_title
            object.hub = element.hub
            sortArray.push(object)
        }
        return sortArray
    }
}