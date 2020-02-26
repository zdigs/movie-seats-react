import React from "react";
import {Pane} from "evergreen-ui";

const Seats = props => {
    return(
        <Pane
        width={"100%"}
        display={"block"}
        marginLeft={"60px"}
        >
            <div className="row">
                <div className="seat reserved"></div>
                <div className="seat reserved"></div>
                <div className="seat "></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat reserved"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat reserved"></div>
                <div className="seat reserved"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat reserved"></div>
                <div className="seat reserved"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat reserved"></div>
                <div className="seat reserved"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat reserved"></div>
                <div className="seat reserved"></div>
                <div className="seat reserved"></div>
                <div className="seat reserved"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
        </Pane>
    )
}

export default Seats;
