import React, { useState } from "react";
import Animal from './animal' 
import News from './News'

const Sidebar = ({sidebarContent, sidebarAnimals, news}) => {

 return (
  <>
  <h2>{sidebarContent}</h2>
  {sidebarAnimals !== undefined 
    ? sidebarAnimals.result.map((animal, i) => {return <Animal key={i} animal={animal}/>}) 
    : null}
  {news.articles !== undefined 
        ? news.articles.map((newsStory, i) => {return <News key={i} news={newsStory}/>}) 
        : null} 
  </>
 )}
 
export default Sidebar;

