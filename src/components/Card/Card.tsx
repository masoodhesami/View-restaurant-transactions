import React from 'react';
import styles from "./Card.module.css"
import {iSortedState} from "../../state/interfaces"

const Card: React.FC<iSortedState> = ({allSortData}) => {

    const dateConverter = (dateTime: String) => {
        const date = new Date(String(dateTime))
        return date.getHours() + ":" + date.getMinutes() + " , " + date.toLocaleDateString('fa-IR')
    }

    if (allSortData.allSortData.length > 0) {
        allSortData.allSortData.map(item => console.log(item))
    }

    return (
        <>
            {allSortData.allSortData.length > 0 && allSortData.allSortData.map(item =>
                <div key={String(item.id)}
                     className="card-body">
                    <p className="card-title text-muted mb-2">
                        {dateConverter(String(item.datetime))}
                    </p>
                    <h6 className={Number(item.amount) > 0 ? "card-text text-success" : "card-text text-danger"}>
                        {item.title}
                    </h6>
                    <p className={"text-secondary"}><>
                        {item.hub.title.length > 1 &&
                            <span className={"text-primary"}>
                        {item.hub.title}
                        </span>}
                        {item.driver.length > 1 &&
                            <span className={"mt-1"}> <span className={"text-muted"}> , راننده: </span>
                                {item.driver}</span>}
                    </>
                    </p>
                    <div className={"d-flex justify-content-end"}>
                        <p className={Number(item.amount) > 0 ? `${styles.position} ${styles.greenColor}` : `${styles.position} ${styles.redColor}`}>{Number(item.amount)}</p>
                    </div>
                </div>)}
        </>
    );
};

export default Card;
