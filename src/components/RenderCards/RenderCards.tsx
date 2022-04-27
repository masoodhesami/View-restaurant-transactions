import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {iState} from "../../state/reducers/reducer"
import Card from "../Card/Card";
import {getData} from "../../state/actions/action";


const RenderCards = () => {
    const [sortArray] = useState<any>([])
    const data = useSelector((state: iState) => state.transactionsData);
    const dispatch = useDispatch();
    const gettingData = async () => {
        const trans_data = await dispatch(getData());
        if (sortArray.length < 2) {
            sortArrayPayments(trans_data.payments)
            sortArrayTrip_financials(trans_data.trip_financials)
            sortArrayMisc_expenses(trans_data.misc_expenses)
            sortArrayConcurrency_costs(trans_data.concurrency_costs)
            sortAllData(sortArray)
            console.log(sortArray)
        }


    }

    const sortArrayPayments = (trans_data: any) => {
        if (trans_data) {
            trans_data.sort(function (a: any, b: any) {
                const date1 = new Date(a.datetime);
                const date2 = new Date(b.datetime);
                return Number(date2) - Number(date1)
            });
            for (const element of trans_data) {
                const object = {
                    id: -1,
                    title: "",
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
        }
    }
    const sortArrayTrip_financials = (trans_data: any) => {
        if (trans_data) {
            trans_data.sort(function (a: any, b: any) {
                const date1 = new Date(a.request_datetime);
                const date2 = new Date(b.request_datetime);
                return Number(date2) - Number(date1)
            });
            for (const element of trans_data) {
                const object = {
                    id: -1,
                    title: "",
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
                object.datetime = element.request_datetime
                object.amount = element.final_price
                object.driver = element.driver
                object.title = element.source_title
                object.hub = element.hub
                sortArray.push(object)
            }
        }
    }
    const sortArrayMisc_expenses = (trans_data: any) => {
        if (trans_data) {
            trans_data.sort(function (a: any, b: any) {
                const date1 = new Date(a.created_at);
                const date2 = new Date(b.created_at);
                return Number(date2) - Number(date1)
            });
            for (const element of trans_data) {
                const object = {
                    id: -1,
                    title: "",
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
                object.datetime = element.created_at
                object.amount = element.amount
                object.title = element.title
                sortArray.push(object)
            }
        }
    }
    const sortArrayConcurrency_costs = (trans_data: any) => {
        if (trans_data) {
            trans_data.sort(function (a: any, b: any) {
                const date1 = new Date(a.created_at);
                const date2 = new Date(b.created_at);
                return Number(date2) - Number(date1)
            });
            for (const element of trans_data) {
                const object = {
                    id: -1,
                    title: "",
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
                object.datetime = element.created_at
                object.amount = element.amount
                object.start_date = element.start_date
                object.end_date = element.end_date
                sortArray.push(object)
            }
        }
    }
    const sortAllData = (trans_data: any) => {
        if (trans_data) {
            trans_data.sort(function (a: any, b: any) {
                const date1 = new Date(a.datetime);
                const date2 = new Date(b.datetime);
                return Number(date2) - Number(date1)
            });
        }
    }


    useEffect(() => {
        gettingData()
    }, []);
    return (
        <>
            <Card transactionsData={data}/>
        </>
    );
};

export default RenderCards;