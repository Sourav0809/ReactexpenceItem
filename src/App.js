import ExpenceItem from "./Components/Expences/ExpenceItem";
import React, { useState } from "react";
import "./App.css"
import './Components/NewExpence/ExpenceForm'
import NewExpence from "./Components/NewExpence/NewExpence";
import Heading from "./Components/Heading/Heading";
import ExpenceFiiter from "./Components/Expences/ExpenceFilter";

const App = () => {
  const Expences = [
    { id: 1, expenceName: "Food", Price: 450, date: new Date(2021, 5, 20) },
    { id: 2, expenceName: "Wooden Table", Price: 600, date: new Date(2022, 5, 12) },
    { id: 3, expenceName: "Toilet Papper", Price: 800, date: new Date(2021, 6, 12) },
    { id: 4, expenceName: "Burger", Price: 100, date: new Date(2021, 10, 10) },
    { id: 5, expenceName: "Petrol", Price: 4150, date: new Date(2021, 5, 12) },
    { id: 6, expenceName: "Movies", Price: 250, date: new Date(2021, 4, 12) }
  ]

  const [currData, updatedData] = useState(Expences)


  console.log(currData);

  const saveExpenceHandeler = (expence) => {
    updatedData(
      [...currData, expence]
    )
  }

  // for filter 

  const [filteredYear, setfilterdYear] = useState('')
  const filterChangeHandeler = (selectedYear) => {
    setfilterdYear(selectedYear)
    console.log(selectedYear);
  }


  return (
    <>
      <Heading />
      <ExpenceFiiter selected={filteredYear} onchangeFilter={filterChangeHandeler} />
      <NewExpence onAddExpence={saveExpenceHandeler} />
      <div className="Container">
        <div className="items">

          {currData.map((item) => {
            return (<ExpenceItem Name={item.expenceName} Price={item.Price} Date={item.date} btnTitle={"Delete Expence"} />)
          })}

        </div>
      </div>


    </>


  )
}

export default App;