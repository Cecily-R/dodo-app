const Sidebar = ({sidebarContent, sidebarAnimals}) => {
 return (
  <>
  <p>{sidebarContent}</p>
  {sidebarAnimals !== undefined 
    ? sidebarAnimals.result.map((animal) => {return (<p>{animal.common_name}</p>)}) 
    : <p></p>}
  </>
 )}
 
export default Sidebar;

