import React from "react"

const Animal = (animal) => {
  return (
    <div className="animalInfo">
      <h3>{animal.animal.common_name}</h3>
      <p>{animal.animal.scientific_name}</p>
      <p>{animal.animal.subpopulation}</p>
      <p>{animal.animal.habitat}</p>
      <p>{animal.animal.image}</p>
    </div>
  );
};


export default Animal;

