import React from 'react';
import {useSelector} from "react-redux";
import {iState} from "../../state/reducers/reducer"
import Card from "../Card/Card";


const RenderCards = () => {
    const data = useSelector((state: iState) => state.transactionsData);
    return (
        <>
            <Card/>
        </>
    );
};

export default RenderCards;