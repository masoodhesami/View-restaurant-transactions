import React from 'react';
interface iProps{
    children: JSX.Element[] | JSX.Element
}
const CardHeader = (props:iProps) => {
    return (
        <>
            <div className="card mb-4">
                <h6 className="card-header">شنبه 31 فروردین 1401</h6>
                {props.children}
            </div>
        </>
    );
};

export default CardHeader;