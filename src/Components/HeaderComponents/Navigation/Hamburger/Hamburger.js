import React from 'react';
import './Hamburger.scss';

const hamburger = (props) => {


    return (
        <div onClick={props.click} className="Hamburger">
            <div className="Hamburger-open Hamburger-open-1"></div>

            <div className="Hamburger-open Hamburger-open-2"></div>

            <div  className="Hamburger-open Hamburger-open-3"></div>
        </div>
    )
}

export default hamburger
