import Map from './Map.js';
import Navbar from './navBar.js';
import Sidebar from './sideBar.js'
import Footer from './footer.js';
import React, {useState} from 'react';

function App() {
  const [sidebarContent, setSidebarContent] = useState("");
  const [sidebarAnimals, setSidebarAnimals] = useState();

  return (
    <>
    <div id='background'>
      <Navbar />
      <div className="flex-container">
        <div className="sidebar-wrapper">
          <Sidebar sidebarContent={sidebarContent} sidebarAnimals={sidebarAnimals}/>
        </div>
        <div className="map-wrapper">
          <Map setSidebarContent={setSidebarContent} setSidebarAnimals={setSidebarAnimals}/>
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