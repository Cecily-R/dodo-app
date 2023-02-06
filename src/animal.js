import React from "react"
import wolf from './images/red_wolf.jpg'

const Animal = (animal) => {
  return (
    <div className="animalInfo">
      <h3>{animal.animal.common_name}</h3>
      <p>{animal.animal.scientific_name}</p>
      <p>{animal.animal.subpopulation}</p>
      <p>{animal.animal.habitat}</p>
      <img src={ wolf } />
    </div>
  );
};


export default Animal;

