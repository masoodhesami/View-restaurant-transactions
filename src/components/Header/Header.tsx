import React from 'react';
import Dropdown from "../Dropdown/Dropdown";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import styles from "./header.module.css"
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
    return (
        <>
            <div className={`${styles.flexEnd} ${styles.position}`}>
                <Dropdown/>
            </div>
            <HeaderTitle/>
            <div className={`${styles.flexCenter}`}>
                <SearchBox/>
            </div>
        </>
    );
};

export default Header;