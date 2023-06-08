import ExpenceItem from "./Components/ExpenceItem";
import React from "react";
import "./App.css"

const App = () => {
  const Expences = [
    { id: 1, expenceName: "Food", Price: 450, date: new Date(2021, 5, 20) },
    { id: 2, expenceName: "Wooden Table", Price: 600, date: new Date(2022, 5, 12) },
    { id: 3, expenceName: "Toilet Papper", Price: 800, date: new Date(2021, 6, 12) },
    { id: 4, expenceName: "Burger", Price: 100, date: new Date(2021, 10, 10) },
    { id: 5, expenceName: "Petrol", Price: 4150, date: new Date(2021, 5, 12) },
    { id: 6, expenceName: "Movies", Price: 250, date: new Date(2021, 4, 12) }
  ]

  return (
    <>
      {Expences.map((item) => {

        return (<ExpenceItem Name={item.expenceName} Price={item.Price} Date={item.date} />)
      })}

    </>


  )
}

export default App;