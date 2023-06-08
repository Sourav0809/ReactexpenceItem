
import "../Components/ExpenceItem.css"
import React from "react";

const ExpenceItem = (props) => {


    return (
        <>
            <div className="expences">
                <div className="expenceitems"><h2>{props.Name}</h2></div>
                <div className="expenceitems"><h2>{props.Price}</h2></div>
                <div className="expenceitems"><h2>{props.Date}</h2></div>
            </div>

        </>
    )
}


export default ExpenceItem;