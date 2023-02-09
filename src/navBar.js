import React from "react";
import logo from "./images/dodo.png";

const Navbar = (props) => {
  function handleClick() {
    props.setShowNews(!props.showNews)
    props.setShowAnimals(false)
    props.setSidebarContent('Breaking News')
  };

  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="logo" />
          <div className="vertical-center"> 
            <button className="breakingNewsButton" onClick={handleClick}>
              Breaking News
                </button>
            </div>
        </nav>
      </header>
  );
}
 
export default Navbar;