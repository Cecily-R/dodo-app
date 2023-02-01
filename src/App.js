<<<<<<< HEAD
import Map from './Map.js';
import Navbar from './navBar.js';
import React, {useState} from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css' //needed?
=======
import React, { useState, useEffect } from "react";
>>>>>>> b2cc1d1 (Added JSON db containing list of countries and fetched in App.js file)

function App() {
  const [content, setContent] = useState("");

<<<<<<< HEAD
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="map">
      <ReactTooltip anchorId="my-element">{content}</ReactTooltip>
      {/*<p id="my-element" data-tooltip-content={content}>Tooltip</p>*/}
          <Map setTooltipContent={setContent}/>
      </div>
=======
const App = () => {
  const [countries, setCountries] =  useState([])

  const getData = () => {
    fetch('http://localhost:3001/countries', {
      header:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => {setCountries(data)})
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      
>>>>>>> b2cc1d1 (Added JSON db containing list of countries and fetched in App.js file)
    </div>
  );
};

export default App;