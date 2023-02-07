import React, { useState } from "react";
import News from './News';
import NewsClient from './api/NewsClient'

const Navbar = () => {
  const [news, setNews] = useState('');

  function handleClick() {

    const newsClient = new NewsClient();
    newsClient.fetchNewsArticles(setNews); 
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