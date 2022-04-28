import React, {useState} from 'react';
import styles from "./SearchBox.module.css"
import {useSelector, useDispatch} from "react-redux";
import {iSortedState} from "../../state/interfaces";
import {setSortedData} from "../../state/actions/sortArrayAction"

const SearchBox = () => {
    const dispatch = useDispatch()
    const sortedData = useSelector((state: iSortedState) => state.allSortData)
    let [basicData] = useState<any>([...sortedData.allSortData])
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let filteredArray: any = []
        basicData.filter((item: { driver: string; }) => {
            if (event.target.value === "") {
                return item;
            } else if (item.driver.toLowerCase().includes(event.target.value.toLowerCase())) {
                if (filteredArray.length < 2) {
                    filteredArray.push(item)
                }
                return item;
            }
        });
        dispatch(setSortedData(filteredArray))
        if (event.target.value.length < 1) {
            dispatch(setSortedData(basicData))
        }
    }

    return (
        <>
            <form className="form-inline my-lg-0">
                <input className={`form-control mr-sm-2 ${styles.position}`} type="search"
                       placeholder="جستجو نام کوریر ..." aria-label="Search"
                       onChange={changeHandler}
                />
            </form>
        </>
    );
};

export default SearchBox;