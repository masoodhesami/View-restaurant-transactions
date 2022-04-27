import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {iSortedState} from "../../state/interfaces"
import Card from "../Card/Card";
import {getData} from "../../state/actions/getDataAction";
import {setSortedData} from "../../state/actions/sortArrayAction";
import {
    sortArrayPayments,
    sortArrayTrip_financials,
    sortArrayMisc_expenses,
    sortArrayConcurrency_costs,
    sortAllData
} from "../../utils/sortFunctions"

const RenderCards = () => {
    let [sortArray] = useState<any>([])
    const sortedData = useSelector((state: iSortedState) => state.allSortData)
    const dispatch = useDispatch();
    const gettingData = async () => {
        const trans_data = await dispatch(getData());
        if (sortArray.length < 2) {
            sortArray = [...sortArray, ...sortArrayPayments(trans_data.payments)]
            sortArray = [...sortArray, ...sortArrayTrip_financials(trans_data.trip_financials)]
            sortArray = [...sortArray, ...sortArrayMisc_expenses(trans_data.misc_expenses)]
            sortArray = [...sortArray, ...sortArrayConcurrency_costs(trans_data.concurrency_costs)]
            sortArray = sortAllData(sortArray)
            dispatch(setSortedData(sortArray))
        }
    }

    useEffect(() => {
        gettingData()
    }, []);
    return (
        <>
            <Card allSortData={sortedData}/>
        </>
    );
};

export default RenderCards;