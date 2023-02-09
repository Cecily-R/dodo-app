import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup, Marker} from "react-simple-maps";
import { geoPatterson } from "d3-geo-projection";
import ApiClient from './api/ApiClient';
import RedlistModel from './api/RedlistModel';


const width = 800;
const height = 440;

const projection = geoPatterson()
  .translate([width / 2, height / 1.8])
  .scale(128);

const Map = ({setSidebarContent, setSidebarAnimals, setSidebarCountry, groupSelection, statusSelection, sidebarCountry}) => {
  const areaSwitchButton = useRef(null);
  const [buttonText, setButtonText] = useState('countries');
  const [geoURL, setGeoURL] = useState("https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json");
  const [_, setSelectedArea] = useState();
  const redlist = new RedlistModel();
  const [iso, setIso] = useState()

  //redlist.listOfGroups(setGroupList)
  

  const handleClick = (geo) => () => {
    const selectedArea = areaSwitchButton.current.textContent
    const countryOrContinent = selectedArea === 'continents' ? geo.properties.name : geo.properties.continent
    const client = new ApiClient();
    const redlist = new RedlistModel();
    setIso(geo.properties["Alpha-2"])

    setSelectedArea(countryOrContinent);
    setSidebarContent(countryOrContinent);

    selectedArea !== 'continents'
      ? client.fetchAnimalsBySelectedArea(countryOrContinent, setSidebarAnimals)
      : redlist.test(geo.properties["Alpha-2"], groupSelection, statusSelection, setSidebarCountry, sidebarCountry)
  };

  useEffect(() => {
    redlist.test(iso, groupSelection, statusSelection, setSidebarCountry, sidebarCountry)
  }, [groupSelection, statusSelection])

  useEffect(()=> {
  }, [sidebarCountry])

  function handleCountryClick() {
    if (buttonText === 'continents') {
      setButtonText('countries');
      setGeoURL("https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json");
      setSidebarContent()
      setSidebarCountry()
    } else {
      setButtonText('continents');
      setGeoURL("https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json");
      setSidebarContent()
      setSidebarAnimals()
    };
  };

  return (
    <div className="Map">
    <button id="countryOrContinentButton" onClick={handleCountryClick} ref={areaSwitchButton}>{buttonText}</button>     
      <ComposableMap width={width} height={height} projection={projection} position="relative" >
      <ZoomableGroup translateExtent={[[0, 0], [width, height]]}>
            <Geographies geography={geoURL}>
              {({geographies}) =>
                geographies.map((geo, index) => {
                    return (
                    <Geography
                      key={index}
                      geography={geo}
                      onClick={handleClick(geo)}
                      style={{
                        hover: {
                          fill: "#23cf8c",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#23cf8c",
                          outline: "none"
                        },
                        default: {
                            outline: 'none'
                        }
                      }}
                      />
                  )
                })
              }
            </Geographies> 
          </ZoomableGroup>
      </ComposableMap>
    </div>
  )
};


export default Map;
