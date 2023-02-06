import Animal from './animal' 

const Sidebar = ({sidebarContent, sidebarAnimals}) => {

 return (
  <>
  <h2>{sidebarContent}</h2>
  {sidebarAnimals !== undefined 
    ? sidebarAnimals.result.map((animal, i) => {return <Animal key={i} animal={animal}/>}) 
    : "hello"}
  </>
 )}
 
export default Sidebar;

