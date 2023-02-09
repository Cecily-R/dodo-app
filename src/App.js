import Map from './Map.js';
import Navbar from './navBar.js';
import Sidebar from './sideBar.js'
import Footer from './footer.js';
import React, {useState, useEffect} from 'react';

function App() {
  const [sidebarContent, setSidebarContent] = useState("");
  const [sidebarAnimals, setSidebarAnimals] = useState();
  const [groupSelection, setGroupSelection] = useState("amphibians")
  const [statusSelection, setStatusSelection] = useState("EX")
  const [sidebarCountry, setSidebarCountry] = useState()
  const [pageSwitch, setPageSwitch] = useState()
  const [selectedArea, setSelectedArea] = useState();

  return (
    <>
    <div id='background'>
      <Navbar />
      <div className="flex-container">
        <div className="sidebar-wrapper">
          <Sidebar 
            sidebarContent={sidebarContent} 
            sidebarAnimals={sidebarAnimals}
            sidebarCountry={sidebarCountry} 
            selectedArea={selectedArea}
            setGroupSelection={setGroupSelection}
            setStatusSelection={setStatusSelection}
          />
        </div>
        <div className="map-wrapper">
          <Map 
            setSidebarContent={setSidebarContent} 
            setSidebarAnimals={setSidebarAnimals} 
            setSidebarCountry={setSidebarCountry}
            setPageSwitch={setPageSwitch}
            setSelectedArea={setSelectedArea}
            groupSelection={groupSelection}
            statusSelection={statusSelection}
            sidebarCountry={sidebarCountry}
          />
        </div>
      </div>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </>
  );
};

export default App;