import React, { useState } from "react";
import Animal from './animal' 
import News from './News'

const Sidebar = (props) => {


return (
  <>
  <h2>{props.sidebarContent}</h2>
  {props.sidebarAnimals !== undefined && props.showAnimals === true
    ? props.sidebarAnimals.result.sort().map((animal, i) => {return <Animal key={i} animal={animal}/>})
    : null}
  {props.showNews ? <News />: null
  }
  </>
  )
}
 
export default Sidebar;