
import Map from './Map.js';
import Navbar from './navBar.js';
import Sidebar from './sideBar.js'
import Footer from './footer.js';
import React, {useState} from 'react';


function App() {
  const [sidebarContent, setSidebarContent] = useState('Click the map!');
  const [sidebarAnimals, setSidebarAnimals] = useState();
  const [groupSelection, setGroupSelection] = useState("amphibians")
  const [statusSelection, setStatusSelection] = useState("EX")
  const [sidebarCountry, setSidebarCountry] = useState()
  const [buttonText, setButtonText] = useState('Countries');
  const [showNews, setShowNews] = useState(false);
  const [showAnimals, setShowAnimals] = useState(false);
  const [loadingAPI, setLoadingAPI] = useState(false)
  const [noneFound, setNoneFound] = useState(false)

  return (
    <>
    <div id='background'>
      <Navbar 
      showNews={showNews} 
      setShowNews={setShowNews} 
      setShowAnimals={setShowAnimals} 
      setSidebarContent={setSidebarContent} />
      <div className="flex-container">
        <div className="sidebar-wrapper">
          <Sidebar 
            sidebarContent={sidebarContent} 
            sidebarAnimals={sidebarAnimals}
            sidebarCountry={sidebarCountry}
            buttonText={buttonText} 
            setGroupSelection={setGroupSelection}
            setStatusSelection={setStatusSelection}
            showNews={showNews}
            showAnimals={showAnimals}
            setShowAnimals={setShowAnimals}
            loadingAPI={loadingAPI}
            noneFound={noneFound}
          />
        </div>
        <div className="map-wrapper">
          <Map 
            setSidebarContent={setSidebarContent} 
            setSidebarAnimals={setSidebarAnimals} 
            setSidebarCountry={setSidebarCountry}
            setButtonText={setButtonText}
            setLoadingAPI={setLoadingAPI}
            buttonText={buttonText}
            groupSelection={groupSelection}
            statusSelection={statusSelection}
            sidebarCountry={sidebarCountry}
            setShowNews={setShowNews}
            showAnimals={showAnimals}
            setShowAnimals={setShowAnimals}
            setNoneFound={setNoneFound}
          />
        </div>
      </div>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </>
  );
}

export default App;