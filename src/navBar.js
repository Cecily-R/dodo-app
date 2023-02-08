import React from "react";
import logo from "./images/dodo.png";

const Navbar = (props) => {
  function handleClick() {
    props.setShowNews(!props.showNews)
  };

  return (
    <header> 
      <h1>dodo.</h1>
      <nav className="navbar">
      <div className="vertical-center">  
        <ul>
        <img src={logo} alt="logo" />
          <li>
            <button className="breakingNewsButton" onClick={handleClick}>
              breaking news.
            </button>
           </li>
           <li>
            <button className="resourcesButton">Make a Donation</button>
           </li>
        </ul>
        </div>
      </nav>
    </header>
  );
}
 
export default Navbar;