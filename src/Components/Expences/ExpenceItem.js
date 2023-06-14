
import "./ExpenceItem.css"
import ExpenceDate from "./ExpenceDate";
import React, { useState } from 'react'



const ExpenceItem = (props) => {
    const [CurrPrice, UpdatedPrice] = useState(props.Price)

    const onlcickHandeler = () => {
        UpdatedPrice(100)
    }

    return (
        <>

            <div className="expences">
                <div className="expenceitems"><h2>{props.Name}</h2></div>
                <div className="expenceitems"><h2>{CurrPrice} $</h2></div>
                <div className="expenceDate"><ExpenceDate Date={props.Date} /></div>
                <div className="btn"><button onClick={onlcickHandeler}>{props.btnTitle}</button></div>
            </div>


        </>
    )
}


export default ExpenceItem;

