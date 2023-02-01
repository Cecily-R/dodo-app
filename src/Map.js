import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup} from "react-simple-maps";
import { geoPatterson } from "d3-geo-projection";
import Navbar from './navBar.js';


const geoURL = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

const width = 800;
const height = 500;

const projection = geoPatterson()
  .translate([width / 2, height / 1.75])
  .scale(100);


const Map = ({setTooltipContent}) => {
  const [countries, setCountries] =  useState([])
  const [position, setPosition] = useState({coordinates:[0, 0], zoom: 1})

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  const getData = () => {
    fetch('http://localhost:3001/countries', {
      header:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => {setCountries(data)})
  }
 
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="Map">
        <ComposableMap width={width} height={height} projection={projection} position="relative">
            <ZoomableGroup 
              zoom={position.zoom}
              centre={position.coordinates}
              onMoveEnd={handleMoveEnd}>

              <Geographies geography={geoURL}>
                {({geographies}) =>
                  geographies.map((geo, index) => {
                    return (
                      <Geography
                      key={index}
                      geography={geo}
                      onMouseEnter={() => {                  
                        const NAME  = geo.properties.name;
                        console.log(`${NAME}`)
                        setTooltipContent(`${NAME}`);
                        <p id="my-element" data-tooltip-content="hello world">
                          Tooltip
                        </p>
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        
                        hover: {
                          fill: "purple",
                          outline: "none"
                        },
                        pressed: {
                          fill: "purple",
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
  );
}

export default Map;
