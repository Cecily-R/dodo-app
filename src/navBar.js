import React from "react";
import logo from "./css/dodo.png";

const Navbar = (props) => {
  function handleClick() {
    props.setShowNews(!props.showNews)
    props.setShowAnimals(false)
    props.setSidebarContent('Breaking News')
    if (props.showNews === true) props.setSidebarContent()
  }

  return (
    <header>
      <nav className="navbar">
        <img src={ logo } alt="Logo" />
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