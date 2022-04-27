import React from 'react';
import styles from "../Header/header.module.css"

interface iProps {
    children: JSX.Element[] | JSX.Element
}

const CardHeader = (props: iProps) => {
    return (
        <>
            <div className="card mb-4">
                <h6 className={`card-header ${styles.sticky}`}>شنبه 31 فروردین 1401</h6>
                {props.children}
            </div>
        </>
    );
};

export default CardHeader;