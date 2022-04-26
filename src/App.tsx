import React from 'react';
import './App.css';
import CardHeader from "./components/Card/CardHeader";
import Layout from "./components/Layout/Layout";
import RenderCards from "./components/RenderCards/RenderCards";

function App() {

    return (
        <Layout>
            <CardHeader>
               <RenderCards/>
            </CardHeader>
        </Layout>
    );
}


export default App;


