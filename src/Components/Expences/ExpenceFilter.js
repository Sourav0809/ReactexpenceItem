import React from 'react'
import './ExpenceFilter.css'



const ExpenceFiiter = (props) => {
    const dropDownChangeHandeler = (e) => {
        props.onchangeFilter(e.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter By Year</label>
                <select value={props.selected} onChange={dropDownChangeHandeler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2018'>2018</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenceFiiter;