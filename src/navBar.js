import React from "react";

const Navbar = (props) => {
  function handleClick() {
    props.setShowNews(!props.showNews)
  };

  return (
    <header> 
      <h1>dodo.</h1>
      <nav className="navbar">
        <ul>
          <li>
            <button className="breakingNewsButton" onClick={handleClick}>
              breaking news.
            </button>
          </li>
          <li>
            <button className="resourcesButton">donate here.</button >
          </li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Navbar;