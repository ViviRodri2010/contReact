//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(() => {
    counter ++;
    let units = Math.floor((counter / 1) % 10);
    let tenths = Math.floor((counter / 10) % 10);
    let hundreds = Math.floor((counter / 100) % 10);
    let thousands = Math.floor((counter / 1000) % 10);
    let tenthousands = Math.floor((counter / 10000) % 10);
    let hundredthousands = Math.floor((counter / 100000) % 10);
    ReactDOM.render((
    <>
      <div>
        <h1>{hundredthousands}</h1> 
        <h1>{tenthousands}</h1>
        <h1>{thousands}</h1> 
        <h1>{hundreds}</h1> 
        <h1>{tenths}</h1>
        <h1>{units}</h1>
      </div>
    </>), document.querySelector("#app"));
}, 1000)