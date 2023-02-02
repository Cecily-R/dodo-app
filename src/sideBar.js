import { useEffect } from 'react'

const Sidebar = ({country}) => {
 return (country === "" ? <p>click a continent</p> : <p>{country}</p>)
}
 
export default Sidebar;