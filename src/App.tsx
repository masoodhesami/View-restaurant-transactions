import React from 'react';
import './App.css';
import Card from "./components/Card/Card";
import CardHeader from "./components/Card/CardHeader";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <Layout>
            <CardHeader>
                <Card/>
            </CardHeader>
        </Layout>
    );
}

export default App;
