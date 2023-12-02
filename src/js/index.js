//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
const startCount = document.getElementById("startCount");
const pauseButton = document.getElementById("pause");
const continueButton = document.getElementById("continue");
const restartButton = document.getElementById("restart");


startCount.addEventListener("change", (event) => {
  counter = Math.floor(event.target.value)
});
pauseButton.addEventListener("click", pause);
continueButton.addEventListener("click", continueCount);
restartButton.addEventListener("click", restart);



function pause(){
  update = false;
}
function continueCount(){
  update = true;
}

function restart(){
  counter = 0;
  pause()
}

let update = true;

let counter = 0;
setInterval(() => {
  if(update){
    counter ++;
  }
    let units = Math.floor((counter / 1) % 10);
    let tenths = Math.floor((counter / 10) % 10);
    let hundreds = Math.floor((counter / 100) % 10);
    let thousands = Math.floor((counter / 1000) % 10);
    let tenthousands = Math.floor((counter / 10000) % 10);
    let hundredthousands = Math.floor((counter / 100000) % 10);
    ReactDOM.render((
    <>
      <div>
        <h1>⏰</h1>
        <h1>{hundredthousands}</h1> 
        <h1>{tenthousands}</h1>
        <h1>{thousands}</h1> 
        <h1>{hundreds}</h1> 
        <h1>{tenths}</h1>
        <h1>{units}</h1>
      </div>
    </>), document.querySelector("#app"));
}, 1000)