
import {useEffect} from 'react'
import News from './News'
import Animal from './animal' 

const Sidebar = ({noneFound, loadingAPI, sidebarContent, sidebarAnimals, sidebarCountry, buttonText, setGroupSelection, setStatusSelection, showAnimals, showNews}) => {
  const statusList = [
    { apiName: "DD", readableName: "Data Deficient" },
    { apiName: "LC", readableName: "Least Concern" },
    { apiName: "NT", readableName: "Near Threatened" },
    { apiName: "VU", readableName: "Vulnerable" },
    { apiName: "EN", readableName: "Endangered" },
    { apiName: "CR", readableName: "Critical" },
    { apiName: "EW", readableName: "Extinct in Wild" },
    { apiName: "EX", readableName: "Extinct" }
  ]
  const groupList = ["reef_building_corals","chameleons","mammals","mangrove_plants","seagrasses","cycads","blennies","cone_snails","magnolias","seasnakes","fw_caridean_shrimps","fw_crayfish","tunas_and_billfishes","butterfly_fishes","groupers","pufferfishes","conifers","surgeonfishes","birds","crocodiles_and_alligators","sharks_and_rays","fw_crabs","cacti","tarpons_and_ladyfishes","sturgeons","angelfishes","lobsters","amphibians","seabreams_porgies_picarels","hagfishes","wrasses_and_parrotfishes"]

  function handleGroupChange(e) {
    setGroupSelection(e.target.value)
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
    <select className="dropdown"onChange={handleGroupChange}>
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
    <select className="dropdown" onChange={handleStatusChange}>
      {statusList.map(status => {
        return (
          <option value={status.apiName}> 
            {
              status.readableName
            } 
          </option>
        )
      })}
    </select>

  return (
    <>

    <h2>{sidebarContent || "Click the map!"}</h2>
    { showNews === false ?
      <div>
        <h3 className='animalTypeDropdown'>{buttonText === 'Continents' && groupDropdown}</h3>
        <h3 className="animalStatusDropdown">{buttonText === 'Continents' && statusDropdown}</h3>
      </div> : null }
      {showNews == false && loadingAPI && <p id='loadingMs'>Loading...</p>}
      {showNews == false && noneFound && <p id='noSearchMatchesMs'>No species match your criteria.</p>}
  

    {sidebarAnimals !== undefined && showAnimals === true
     ? sidebarAnimals.result.sort().map((animal, i) => {return <Animal key={i} animal={animal}/>})
      : null}
    {showNews ? <News /> : null}
    {sidebarCountry !== undefined && showAnimals === true
      ? sidebarCountry.map((animal) => {return (<p id='animals'>{animal.result[0].main_common_name}</p>)})
      : <p></p>}
    </>
  )}
 
export default Sidebar;