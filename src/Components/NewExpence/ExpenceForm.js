import React, { useState } from 'react'
import './ExpenceForm.css'



const ExpenceForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const expenceNameHandeler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const expencePriceHandeler = (e) => {
        setEnteredPrice(e.target.value)
    }

    const expenceDateHandeler = (e) => {
        setEnteredDate(e.target.value)
    }


    // submit the inputs
    const formSubmit = (e) => {
        e.preventDefault()
        const newExpenceData = {
            expenceName: enteredTitle,
            Price: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveExpenceHandeler(newExpenceData)


        setEnteredTitle("")
        setEnteredPrice("")
        setEnteredDate("")
    }




    return <div className='ExpenceForm'>
        <form onSubmit={formSubmit} className='main-form'>
            <label className='form-label'>ExpenceName</label>
            <input type='text' className='form-input ' value={enteredTitle} onChange={expenceNameHandeler} />
            <label className='form-label'>ExpencePrice</label>
            <input type='number' min='0.01' step='0.01' className='form-input' value={enteredPrice} onChange={expencePriceHandeler} />
            <label className='form-label'>ExpenceDate</label>
            <input type='date' min='2019-01-01' max='2022-12-31' className='form-input ' value={enteredDate} onChange={expenceDateHandeler} />
            <button type='button' className='input-btn' onClick={props.onCancelHandeler}>Cancel</button>
            <input type='submit' className='input-btn' />

        </form>
    </div>
}

export default ExpenceForm;