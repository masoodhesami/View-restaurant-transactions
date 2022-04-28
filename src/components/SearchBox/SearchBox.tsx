import React, {useState} from 'react';
import styles from "./SearchBox.module.css"
import {useSelector, useDispatch} from "react-redux";
import {iSortedState} from "../../state/interfaces";
import {setSortedData} from "../../state/actions/sortArrayAction"

const SearchBox = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState<string>("")
    let [filteredArray] = useState<any>([])
    const sortedData = useSelector((state: iSortedState) => state.allSortData)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }
    sortedData.allSortData.filter(item => {
        if (query === "") {
            return item;
        } else if (item.driver.toLowerCase().includes(query.toLowerCase())) {
            if (filteredArray.length < 2) {
                filteredArray = [...filteredArray, item]
            }
            return item;
        }
    });
    if (filteredArray.length === 0) {
        filteredArray = [...sortedData.allSortData]
    }
    console.log(filteredArray)


    return (
        <>
            <form className="form-inline my-lg-0">
                <input className={`form-control mr-sm-2 ${styles.position}`} type="search"
                       placeholder="جستجو نام کوریر ... " aria-label="Search"
                       onChange={changeHandler}
                />
            </form>
        </>
    );
};

export default SearchBox;