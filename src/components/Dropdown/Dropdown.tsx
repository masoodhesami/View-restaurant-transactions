import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setSortedData} from "../../state/actions/sortArrayAction";
import {changeCurrentTitle} from "../../state/actions/changeCurrentTitleAction";
import {
    sortAllData, sortArrayConcurrency_costs, sortArrayMisc_expenses,
    sortArrayPayments, sortArrayTrip_financials,
} from "../../utils/sortFunctions";
import {getData} from "../../state/actions/getDataAction";

const Dropdown = () => {
    useEffect(() => {
        getPureData()
    }, []);
    const dispatch = useDispatch();
    const [fetchedData, setFetchedData] = useState<any>([])
    const [currentTitle, setCurrentTitle] = useState<String>("همه تراکنش ها")
    const getPureData = async () => {
        const trans_data = await dispatch(getData());
        setFetchedData(trans_data)
    }
    const concurrencyHandler = (e: any) => {
        setCurrentTitle(String(e.target.innerHTML))
        dispatch(changeCurrentTitle(String(e.target.innerHTML)))
        dispatch(setSortedData(sortArrayConcurrency_costs(fetchedData.concurrency_costs)))
    }
    const paymentsHandler = (e: any) => {
        setCurrentTitle(String(e.target.innerHTML))
        dispatch(changeCurrentTitle(String(e.target.innerHTML)))
        dispatch(setSortedData(sortArrayPayments(fetchedData.payments)))
    }
    const tripHandler = (e: any) => {
        setCurrentTitle(String(e.target.innerHTML))
        dispatch(changeCurrentTitle(String(e.target.innerHTML)))
        dispatch(setSortedData(sortArrayTrip_financials(fetchedData.trip_financials)))
    }
    const miscHandler = (e: any) => {
        setCurrentTitle(String(e.target.innerHTML))
        dispatch(changeCurrentTitle(String(e.target.innerHTML)))
        dispatch(setSortedData(sortArrayMisc_expenses(fetchedData.misc_expenses)))
    }
    const showAllHandler = (e: any) => {
        setCurrentTitle(String(e.target.innerHTML))
        dispatch(changeCurrentTitle(String(e.target.innerHTML)))
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
                    {currentTitle}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a data-testid="searchBox-item1" onClick={concurrencyHandler} className="dropdown-item" href="#">هزینه خرید ظرفیت</a>
                    <a data-testid="searchBox-item2" onClick={paymentsHandler} className="dropdown-item" href="#">هزینه شارژ حساب</a>
                    <a data-testid="searchBox-item3" onClick={tripHandler} className="dropdown-item" href="#">هزینه سفر</a>
                    <a data-testid="searchBox-item4" onClick={miscHandler} className="dropdown-item" href="#">هزینه متفرقه</a>
                    <div className="dropdown-divider"></div>
                    <a data-testid="searchBox-item5" onClick={showAllHandler} className="dropdown-item" href="#">همه تراکنش ها</a>

                </div>
            </div>
        </>
    );
};

export default Dropdown;