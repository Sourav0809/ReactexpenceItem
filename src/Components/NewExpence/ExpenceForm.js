import React from 'react'
import './ExpenceForm.css'

const expenceNameInput = (e) => {
    console.log(e.target.value)
}
const expencePriceInput = (e) => {
    console.log(e.target.value)
}
const expenceDateInput = (e) => {
    console.log(e.target.value);
}

const ExpenceForm = () => {
    return <div className='ExpenceForm'>
        <form className='main-form'>
            <label className='form-label'>ExpenceName</label>
            <input type='text' className='form-input ' onChange={expenceNameInput} />
            <label className='form-label'>ExpencePrice</label>
            <input type='number' className='form-input' onChange={expencePriceInput} />
            <label className='form-label'>ExpenceDate</label>
            <input type='date' className='form-input ' onChange={expenceDateInput} />
            <input type='submit' className='input-btn' />
        </form>
    </div>
}

export default ExpenceForm;