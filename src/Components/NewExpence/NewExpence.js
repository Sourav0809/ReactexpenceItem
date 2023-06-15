import React from "react";
import ExpenceForm from "./ExpenceForm";






const NewExpence = (props) => {
    const addNewExpence = (enteredExpenceData) => {
        const expenceData = {
            ...enteredExpenceData,
            id: Math.random()

        }
        props.onAddExpence(expenceData)

        // console.log(expenceData)
    }

    return <ExpenceForm onSaveExpenceHandeler={addNewExpence} />
}


export default NewExpence;