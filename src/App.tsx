import React,{useEffect} from 'react';
import './App.css';
import Card from "./components/Card/Card";
import CardHeader from "./components/Card/CardHeader";
import Layout from "./components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./state/actions/action";
import {state} from "./state/reducers/reducer"

function App() {
    const data = useSelector((state:state) => state.transactionsData);
    console.log(data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <Layout>
            <CardHeader>
                <Card/>
            </CardHeader>
        </Layout>
    );
}


export default App;


