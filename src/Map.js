import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps";
import { geoPatterson } from "d3-geo-projection";
import ApiClient from './api/ApiClient';
import RedlistModel from './api/RedlistModel';


const width = 800;
const height = 440;

const projection = geoPatterson()
  .translate([width / 2, height / 1.8])
  .scale(128);


const Map = ({setSidebarContent, setSidebarAnimals, setSidebarCountry, groupSelection, setButtonText, buttonText, statusSelection, sidebarCountry, setShowAnimals, setShowNews, setLoadingAPI, setNoneFound}) => {
  const areaSwitchButton = useRef(null);
  const [geoURL, setGeoURL] = useState("https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json");
  const [_, setSelectedArea] = useState();
  const redlist = new RedlistModel(setLoadingAPI, setNoneFound, buttonText);
  const [iso, setIso] = useState()
  
  const handleClick = (geo) => () => {
    const selectedArea = areaSwitchButton.current.textContent
    const countryOrContinent = selectedArea === 'Continents' ? geo.properties.name : geo.properties.continent
    const client = new ApiClient();
    const redlist = new RedlistModel(setLoadingAPI, setNoneFound, buttonText);
    setIso(geo.properties["Alpha-2"])
    if (selectedArea === 'Continents') setLoadingAPI(true)
    setNoneFound(false)
    setSidebarCountry()

    setSelectedArea(countryOrContinent);
    setSidebarContent(countryOrContinent);
    setShowAnimals(true);
    setShowNews(false);

    selectedArea !== 'Continents'
      ? client.fetchAnimalsBySelectedArea(countryOrContinent, setSidebarAnimals)
      : redlist.findAnimals(geo.properties["Alpha-2"], groupSelection, statusSelection, setSidebarCountry, sidebarCountry, setLoadingAPI)
  }

  useEffect((sidebarCountry) => {
    redlist.findAnimals(iso, groupSelection, statusSelection, setSidebarCountry, sidebarCountry, setLoadingAPI)
  }, [groupSelection, statusSelection])


  useEffect(()=> {
  }, [sidebarCountry])

  function handleCountryClick() {
    if (buttonText === 'Continents') {
      setButtonText('Countries');
      setGeoURL("https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json");
      setSidebarContent()
      setSidebarCountry()
      setLoadingAPI(false)
      setNoneFound(false)
      setShowNews(false);
    } else {
      setButtonText('Continents');
      setGeoURL("https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json");
      setSidebarContent()
      setSidebarAnimals()
      setShowNews(false);
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
