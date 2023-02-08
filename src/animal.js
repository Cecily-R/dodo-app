import React from "react"

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }
 

const Animal = (animal) => {
  return (
    <div className="animalInfo">
      <h3>{animal.animal.common_name}</h3>
      <p>{animal.animal.scientific_name}</p>
      <p>Subpopulation: {animal.animal.subpopulation}</p>
      <p>Habitat: {animal.animal.habitat}</p>
      <img src={ images } alt=""/>
    </div>
  );
};


export default Animal;

