import React from "react"
import image from './images/africa/af_id_02.jpg'

// const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

// function importAll(r) {
//  let images = {};
//  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
//  return images
//  }
 

const Animal = (animal) => {
  return (
    <div className="animalInfo">
      <h3>{animal.animal.common_name}</h3>
      <p>{animal.animal.scientific_name}</p>
      <p>Subpopulation: {animal.animal.subpopulation}</p>
      <p>{animal.animal.habitat}</p>
      <img src={ image } width="150" height="150" alt=""/>
    </div>
  );
};


export default Animal;

