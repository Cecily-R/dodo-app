import Map from './Map';
import Navbar from './navBar';
import Sidebar from './sideBar'
import Footer from './footer';
import React, {useState} from 'react';

function App() {
  const [sidebarContent, setSidebarContent] = useState();
  const [sidebarAnimals, setSidebarAnimals] = useState();
  const [showNews, setShowNews] = useState(false);

  return (
    <>
    <div id='background'>
      <Navbar showNews={showNews} setShowNews={setShowNews} />
      <div className="flex-container">
        <div className="sidebar-wrapper">
          <Sidebar sidebarContent={sidebarContent} sidebarAnimals={sidebarAnimals} showNews={showNews}/>
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