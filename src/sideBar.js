import React, { useState } from "react";
import Animal from './animal' 
import News from './News'

const Sidebar = (props) => {
  
return (
  <>
  <h2>{props.sidebarContent}</h2>
  {props.sidebarAnimals !== undefined
    ? props.sidebarAnimals.result.map((animal, i) => {return <Animal key={i} animal={animal}/> && props.setShowAnimals(true)}) 
    : null}
  {props.showNews ?  <News /> : null
  }
  </>
  )
}
 
export default Sidebar;