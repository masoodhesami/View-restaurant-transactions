import React from 'react';
import Dropdown from "../Dropdown/Dropdown";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import styles from "./header.module.css"
import SearchBox from "../SearchBox/SearchBox";
import {useSelector} from "react-redux";
import {iTitleState} from "../../state/interfaces"

const Header = () => {
    const currentTitle = useSelector((state: iTitleState) => state.currentTitle)
    return (
        <>
            <div className="row mt-3">
                <div className={`col-md-3 col-12`}>
                    <HeaderTitle/>
                </div>
                <div className={"col-md-5 col-12"}>
                    {currentTitle.currentTitle === "هزینه سفر" &&
                        <div className={` ${styles.position}`}>
                            <SearchBox/>
                        </div>
                    }
                </div>
                <div className={"col-md-4 col-12"}>
                    <div className={`${styles.flexEnd} ${styles.positionBtn}`}>
                        <Dropdown/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;