import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
import ExpenceForm from "./Components/NewExpence/ExpenceForm";
ReactDOM.render(
    <>
        <ExpenceForm />
        <div className="Container">
            <div className="items">
                <App />
            </div>
        </div>
    </>
    , document.getElementById("root"))

