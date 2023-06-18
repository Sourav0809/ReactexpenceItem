import ExpenceItem from "./Components/Expences/ExpenceItem";
import React, { useState } from "react";
import "./App.css"
import './Components/NewExpence/ExpenceForm'
import NewExpence from "./Components/NewExpence/NewExpence";
import Heading from "./Components/Heading/Heading";
import ExpenceFiiter from "./Components/Expences/ExpenceFilter";
import ExpenceChart from "./Components/Expences/ExpenceChart";

const App = () => {
  const Expences = [
    { id: 1, expenceName: "Food", Price: 450, date: new Date(2020, 5, 20) },
    { id: 2, expenceName: "Wooden Table", Price: 600, date: new Date(2021, 5, 12) },
    { id: 3, expenceName: "Toilet Papper", Price: 800, date: new Date(2020, 6, 12) },
    { id: 4, expenceName: "Burger", Price: 100, date: new Date(2020, 10, 10) },
    { id: 5, expenceName: "Petrol", Price: 4150, date: new Date(2018, 5, 12) },
    { id: 6, expenceName: "Movies", Price: 250, date: new Date(2021, 4, 12) },
    { id: 7, expenceName: "Shopping", Price: 1250, date: new Date(2018, 4, 12) }
  ]

  const [currData, updatedData] = useState(Expences)


  const saveExpenceHandeler = (expence) => {
    updatedData((prevdata) => {
      return [...prevdata, expence]

    }
    )
  }

  // for filter 

  const [filteredYear, setfilterdYear] = useState('2020')
  const filterChangeHandeler = (selectedYear) => {
    setfilterdYear(selectedYear)
  }

  const filteredExpence = currData.filter((expenceValue) => {
    return expenceValue.date.getFullYear().toString() === filteredYear
  })

  // if there is no content 

  let displayExpence = <h2 className="displayed-text">No Expences in Selected Year</h2>

  if (filteredExpence.length > 0) {
    displayExpence = filteredExpence.map((item) => {
      return (<ExpenceItem key={item.id} Name={item.expenceName} Price={item.Price} Date={item.date} btnTitle={"Delete Expence"} />)
    })
  }

  // display form btn 





  return (
    <>
      <Heading />
      <ExpenceFiiter selected={filteredYear} onchangeFilter={filterChangeHandeler} />
      <NewExpence onAddExpence={saveExpenceHandeler} />
      <ExpenceChart expences={filteredExpence} />
      <div className="Container">
        <div className="items">
          {displayExpence}
        </div>
      </div>


    </>


  )
}

export default App;