import React, { useState, useEffect } from "react";


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
      
    </div>
  );
}

export default App;
