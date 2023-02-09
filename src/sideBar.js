
import {useEffect} from 'react'
import News from './News'
import Animal from './animal' 

const Sidebar = ({noneFound, loadingAPI, sidebarContent, sidebarAnimals, sidebarCountry, buttonText, setGroupSelection, setStatusSelection, showAnimals, showNews}) => {
  const statusList = ["DD", "LC", "NT", "VU", "EN", "CR", "EW", "EX"]
  const groupList = ["reef_building_corals","chameleons","mammals","mangrove_plants","seagrasses","cycads","blennies","cone_snails","magnolias","seasnakes","fw_caridean_shrimps","fw_crayfish","tunas_and_billfishes","butterfly_fishes","groupers","pufferfishes","conifers","surgeonfishes","birds","crocodiles_and_alligators","sharks_and_rays","fw_crabs","cacti","tarpons_and_ladyfishes","sturgeons","angelfishes","lobsters","amphibians","seabreams_porgies_picarels","hagfishes","wrasses_and_parrotfishes"]
  function handleGroupChange(e) {
    setGroupSelection(e.target.value)
    console.log(e.target.value)
  }

  function handleStatusChange(e) {
    setStatusSelection(e.target.value)
  }

  function format(word) {
    const array = word.replace(/_/g, " ").replace(/fw /, "").split(" ")
    const caps = array.map((word) => {return word.charAt(0).toUpperCase() + word.slice(1)})
    const formatted = caps.join(" ")
    return formatted
  }

  const groupDropdown =
    <select onChange={handleGroupChange}>
      {groupList.sort().map(group => {
        return (
          <option value={group}> 
            {
              format(group)
            } 
          </option>
        )
      })}
    </select>

  const statusDropdown =
    <select onChange={handleStatusChange}>
      {statusList.reverse().map(status => {
        return (
          <option value={status}> 
            {
              status
            } 
          </option>
        )
      })}
    </select>

  return (
    <>

    <p>{sidebarContent}</p>
    {loadingAPI && <h2>Loading...</h2>}
    {noneFound && <h2>No species match your criteria</h2>}

    {sidebarAnimals !== undefined && showAnimals === true
     ? sidebarAnimals.result.sort().map((animal, i) => {return <Animal key={i} animal={animal}/>})
      : null}
    {showNews ? <News />: null}
    {sidebarCountry !== undefined && showAnimals === true
      ? sidebarCountry.map((animal) => {return (<p>{animal.result[0].main_common_name}</p>)})
      : <p></p>}
    <p>{buttonText === 'Continents' && showNews === false && groupDropdown}</p>
    <p>{buttonText === 'Continents' && showNews === false && statusDropdown}</p>
    </>
  )}
 
export default Sidebar;