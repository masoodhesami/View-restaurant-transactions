import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {iState} from "../../state/reducers/reducer"
import Card from "../Card/Card";
import {getData} from "../../state/actions/action";


const RenderCards = () => {
    const data = useSelector((state: iState) => state.transactionsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, []);
    return (
        <>
                <Card transactionsData={data}/>
        </>
    );
};

export default RenderCards;