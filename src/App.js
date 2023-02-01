import Map from './Map.js';
import Navbar from './navBar.js';
import React, {useState} from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css' //needed?

function App() {
  const [content, setContent] = useState("");

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="map">
      <ReactTooltip anchorId="my-element">{content}</ReactTooltip>
      {/*<p id="my-element" data-tooltip-content={content}>Tooltip</p>*/}
          <Map setTooltipContent={setContent}/>
      </div>
    </div>
  );
};

export default App;