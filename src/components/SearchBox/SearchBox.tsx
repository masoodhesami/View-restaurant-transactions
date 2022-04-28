import React from 'react';
import styles from "./SearchBox.module.css"

const SearchBox = () => {
    return (
        <>
            <div className={"row"}>
                <div className={"col-12"}>
                    <form className="form-inline my-lg-0">
                        <input className={`form-control mr-sm-2 ${styles.position}`} type="search" placeholder="جستجو نام کوریر " aria-label="Search"/>
                        {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                    </form>
                </div>
            </div>
        </>
    );
};

export default SearchBox;