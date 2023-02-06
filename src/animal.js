import React from "react"

const Animal = (animal) => {

  return (
    <>
    <div className="animal">
      {animal.common_name}
      {animal.scientific_name}
      </div>
    </>
  );
};


export default Animal;

