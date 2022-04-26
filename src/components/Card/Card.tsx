import React from 'react';
import styles from "./Card.module.css"

const Card = () => {
    return (
        <>
            <div className="card-body">
                <p className="card-title">18:28 , 1401/1/27</p>
                <h6 className="card-text text-danger">خسارت</h6>
                <p>شعبه تهران</p>
                <div className={"d-flex justify-content-end"}>
                    <p className={`${styles.position} ${styles.redColor}`}>120/000-</p>
                </div>
            </div>
        </>
    );
};

export default Card;