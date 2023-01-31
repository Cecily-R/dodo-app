import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup} from "react-simple-maps";
import { geoPatterson } from "d3-geo-projection";

const geoURL = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

const width = 800;
const height = 600;

const projection = geoPatterson()
  .translate([width / 2.2, height / 2.7])
  .scale(98);


const Map = () => {
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
        <ComposableMap width={width} height={height} projection={projection}>
            <ZoomableGroup 
              zoom={position.zoom}
              centre={position.coordinates}
              onMoveEnd={handleMoveEnd}>

              <Geographies geography={geoURL}>
                {({geographies}) =>
                  geographies.map((geo, index) => {
                    const isos = countries.find((s) => s.ISO3 === geo.id)
                    return (
                      <Geography
                      key={index}
                      geography={geo}
                      fill="#23cf8c"/>
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
