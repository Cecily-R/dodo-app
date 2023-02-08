import React from "react";
import logo from "./css/dodo.png";

const Navbar = (props) => {
  function handleClick() {
    props.setShowNews(!props.showNews)
  };

  return (
    <header>
      <nav className="navbar">
        <img src={ logo } alt="Logo" />
          <div className="vertical-center"> 
            <button className="breakingNewsButton" onClick={handleClick}>Breaking News</button>
            <button className="resourcesButton">Make a Donation</button>
          </div>
        </nav>
      </header>
  );
}
 
export default Navbar;