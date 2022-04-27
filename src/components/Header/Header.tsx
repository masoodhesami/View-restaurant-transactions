import React from 'react';
import Dropdown from "../Dropdown/Dropdown";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import styles from "./header.module.css"

const Header = () => {
    return (
        <>
            <div className={`d-flex justify-content-end ${styles.position}`}>
                <Dropdown/>
            </div>
            <HeaderTitle/>
        </>
    );
};

export default Header;