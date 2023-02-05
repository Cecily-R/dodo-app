import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup, Marker} from "react-simple-maps";
import { geoPatterson } from "d3-geo-projection";
import Navbar from './navBar.js';

// const geoURL = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";
// const geoURLCont = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json";

const width = 800;
const height = 400;

const projection = geoPatterson()
  .translate([width / 2, height / 1.6])
  .scale(128);

const Map = ({setSidebarContent}) => {
  const areaSwitchButton = useRef(null);
  const [buttonText, setButtonText] = useState('');
  const [geoURL, setGeoURL] = useState("https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json");
  const [selectedArea, setSelectedArea] = useState();

  const handleClick = (geo) => () => {
    const countryOrContinent = areaSwitchButton.current.textContent

    if (countryOrContinent === 'continents' ) {
      setSelectedArea(geo.properties.name);
    } else {
      setSelectedArea(geo.properties.continent);
    };
    setSidebarContent(selectedArea);
  };

  function handleCountryClick(geoUrl) {
    if (buttonText === 'continents') {
      setButtonText('countries');
      setGeoURL("https://raw.githubusercontent.com/deldersveld/topojson/master/world-continents.json");
    } else {
      setButtonText('continents');
      setGeoURL("https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json");
    };
  };

  return (
    <div className="Map">
    <button id="countryOrContinentButton" onClick={handleCountryClick} ref={areaSwitchButton}>{buttonText || 'continents'}</button>     
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
