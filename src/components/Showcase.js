import React from "react";

const Showcase = props => {
    return(
        <ul className="showcase">
            <li>
                <div className="seat"></div>
                <small>Available</small>
            </li>
            <li>
                <div className="seat selected"></div>
                <small>Selected</small>
            </li>
            <li>
                <div className="seat reserved"></div>
                <small>Reserved</small>
            </li>
        </ul>
    )
};

export default Showcase;
