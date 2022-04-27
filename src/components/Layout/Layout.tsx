import React from 'react';
import Header from "../Header/Header";

interface iProps {
    children: JSX.Element[] | JSX.Element
}

const Layout = (props: iProps) => {
    return (
        <>
            <div className={"container"}>
                <div className={"row mt-5"}>
                    <div className={"d-flex justify-content-center"}>
                        <div className={"col-9"}>
                            <div className={"mb-4"}>
                                <Header/>
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;