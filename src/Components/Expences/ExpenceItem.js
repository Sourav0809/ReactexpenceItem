
import "./ExpenceItem.css"
import ExpenceDate from "./ExpenceDate";
import React from "react";


const ExpenceItem = (props) => {

    return (
        <>

            <div className="expences">
                <div className="expenceitems"><h2>{props.Name}</h2></div>
                <div className="expenceitems"><h2>{props.Price}</h2></div>
                <div className="expenceDate"><ExpenceDate Date={props.Date} /></div>
            </div>


        </>
    )
}


export default ExpenceItem;