import React from 'react';
import styles from "./Card.module.css"
import {iState} from "../../state/reducers/reducer"

const Card: React.FC<iState> = ({transactionsData}) => {

    const dateConverter = (dateTime: String) => {
        const date = new Date(String(dateTime))
        return date.getHours() + ":" + date.getMinutes() + " , " + date.toLocaleDateString('fa-IR')
    }

    return (
        <>
            {transactionsData.trip_financials && transactionsData.trip_financials.map(item =>
                <div key={String(item.id)}
                     className="card-body">
                    <p className="card-title text-muted">
                        {dateConverter(String(item.request_datetime))}
                    </p>
                    <h6 className="card-text text-success">{item.driver}</h6>
                    <p>{item.hub.title}</p>
                    <div className={"d-flex justify-content-end"}>
                        <p className={`${styles.position} ${styles.greenColor}`}>{String(item.final_price)}</p>
                    </div>
                </div>)}
        </>
    );
};

export default Card;