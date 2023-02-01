import { useEffect } from 'react'

const Sidebar = ({country}) => {
 return (country === "" ? <p>Select a Country</p> : <p>{country}</p>)
}
 
export default Sidebar;