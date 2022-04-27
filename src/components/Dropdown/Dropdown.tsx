import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setSortedData} from "../../state/actions/sortArrayAction";
import {
    sortAllData, sortArrayConcurrency_costs, sortArrayMisc_expenses,
    sortArrayPayments, sortArrayTrip_financials,
} from "../../utils/sortFunctions";
import {getData} from "../../state/actions/getDataAction";

const Dropdown = () => {
    const [fetchedData, setFetchedData] = useState<any>([])
    const dispatch = useDispatch();
    const getPureData = async () => {
        const trans_data = await dispatch(getData());
        setFetchedData(trans_data)
    }
    useEffect(() => {
        getPureData()
    }, []);
    const concurrencyHandler = () => {
        dispatch(setSortedData(sortArrayConcurrency_costs(fetchedData.concurrency_costs)))
    }
    const paymentsHandler = () => {
        dispatch(setSortedData(sortArrayPayments(fetchedData.payments)))
    }
    const tripHandler = () => {
        dispatch(setSortedData(sortArrayTrip_financials(fetchedData.trip_financials)))
    }
    const miscHandler = () => {
        dispatch(setSortedData(sortArrayMisc_expenses(fetchedData.misc_expenses)))
    }
    const showAllHandler = () => {
        dispatch(setSortedData(sortAllData([
            ...sortArrayConcurrency_costs(fetchedData.concurrency_costs),
            ...sortArrayPayments(fetchedData.payments),
            ...sortArrayTrip_financials(fetchedData.trip_financials),
            ...sortArrayMisc_expenses(fetchedData.misc_expenses)
        ])))
    }
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle text-white" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    همه تراکنش ها
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a onClick={concurrencyHandler} className="dropdown-item" href="#">هزینه خرید ظرفیت</a>
                    <a onClick={paymentsHandler} className="dropdown-item" href="#">هزینه شارژ حساب</a>
                    <a onClick={tripHandler} className="dropdown-item" href="#">هزینه سفر</a>
                    <a onClick={miscHandler} className="dropdown-item" href="#">هزینه متفرقه</a>
                    <div className="dropdown-divider"></div>
                    <a onClick={showAllHandler} className="dropdown-item" href="#">همه تراکنش ها</a>

                </div>
            </div>
        </>
    );
};

export default Dropdown;