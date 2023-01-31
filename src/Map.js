import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup} from "react-simple-maps";

const geoURL = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

const App = () => {
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
      <div style={{width:"100vw", height:"50vw"}}>
        <ComposableMap
          projectionConfig={{
            scale: 100,
            center: [50, 5]
          }}
          style={{
            width: "100%",
            height: "auto"
          }}>
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
          }

        </ComposableMap>

      </div>
    </div>
  );
}

export default App;
