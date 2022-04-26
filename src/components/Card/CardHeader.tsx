import React from 'react';
interface iProps{
    children: JSX.Element[] | JSX.Element
}
const CardHeader = (props:iProps) => {
    return (
        <>
            <div className="card">
                <h6 className="card-header">شنبه 27 فروردین 1401</h6>
                {props.children}
            </div>
        </>
    );
};

export default CardHeader;