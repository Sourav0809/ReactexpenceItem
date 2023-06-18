import React, { useState } from "react";
import ExpenceForm from "./ExpenceForm";
import './NewExpence.css'





const NewExpence = (props) => {

    const [isEditing, SetIsEditing] = useState(false)
    const addNewExpence = (enteredExpenceData) => {
        const expenceData = {
            ...enteredExpenceData,
            id: Math.random()

        }
        props.onAddExpence(expenceData)

        // console.log(expenceData)
    }

    const SetIsEditingHandeler = () => {
        SetIsEditing(true)
    }
    const cancelForm = () => {
        SetIsEditing(false)
    }

    let display = ""

    if (isEditing === true) {
        display = <ExpenceForm onSaveExpenceHandeler={addNewExpence} onCancelHandeler={cancelForm} />
    }
    else {
        display = <div className="display-expence-btn">
            <button onClick={SetIsEditingHandeler}> Add New Expence</button>
        </div>
    }

    return (
        <>
            {display}
        </>


    )
}


export default NewExpence;