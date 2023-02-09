import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup, Marker} from "react-simple-maps";
import { geoPatterson } from "d3-geo-projection";
import ApiClient from './api/ApiClient'


const width = 800;
const height = 400;

const projection = geoPatterson()
  .translate([width / 2, height / 1.6])
  .scale(128);

const Map = ({setSidebarContent, setSidebarAnimals, setShowAnimals, setShowNews}) => {
  const areaSwitchButton = useRef(null);
  const [buttonText, setButtonText] = useState('');
  const [geoURL, setGeoURL] = useState("https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json");
  const [_, setSelectedArea] = useState();

  const handleClick = (geo) => () => {
    const selectedArea = areaSwitchButton.current.textContent
    const countryOrContinent = selectedArea === 'continents' ? geo.properties.name : geo.properties.continent
    const client = new ApiClient();

    setSelectedArea(countryOrContinent);
    setSidebarContent(countryOrContinent);
    setShowAnimals(true);
    setShowNews(false);

    client.fetchAnimalsBySelectedArea(countryOrContinent, setSidebarAnimals)
  };

  function handleCountryClick() {
    if (buttonText === 'Continents') {
      setButtonText('Countries');
      setGeoURL("https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json");
    } else {
      setButtonText('Continents');
      setGeoURL("https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json");
    };
  };

  return (
    <div className="Map">
    <button id="countryOrContinentButton" onClick={handleCountryClick} ref={areaSwitchButton}>{buttonText || 'Continents'}</button>     
      <ComposableMap width={width} height={height} projection={projection} position="relative">
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
