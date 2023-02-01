import Map from './Map.js';
import Navbar from './navBar.js';
import Sidebar from './sideBar.js'
import React, {useState} from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css' //needed?

function App() {
  const [content, setContent] = useState("");

  return (
    <>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="flex-container">
        <div className="sidebar-wrapper">
          <Sidebar country={content} />
        </div>
        <div className="map-wrapper">
          <ReactTooltip anchorId="my-element">{content}</ReactTooltip>
          {/*<p id="my-element" data-tooltip-content={content}>Tooltip</p>*/}
          <Map setTooltipContent={setContent}/>
        </div>
      </div>
    </>
  );
};

export default App;