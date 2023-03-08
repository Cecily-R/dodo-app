import React from "react"

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
      <p>Subpopulation: <b>{animal.animal.subpopulation}</b></p>
      <p>Habitat: <b>{animal.animal.habitat}</b></p>
      <p><img src={ animal.animal.image } alt={animal.animal.common_name} border="2px" width="150" height="150" /></p>
    </div>
  );
};

// <p>{animal.animal.image}</p>
// <img src={ image } width="150" height="150" alt=""/>
export default Animal;

