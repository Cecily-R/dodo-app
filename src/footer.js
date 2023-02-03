import { useState } from 'react'; 

const Footer = () => {

  const [buttonText, setButtonText] = useState('Click');

  function handleClick() {
    if (buttonText === 'continents') {
      setButtonText('countries');
    } else (setButtonText('continents'));
  }

  return (
    <header>
      <div className="footer">
        click on a continent to see the species in the animal kingdom that need our help the most<br />
        built by Anthony, Cecily, JC, Mike and Naila
      </div>
      <button className="countryOrContinentButton" onClick={handleClick}>{buttonText}</button>
    </header>
  );
}
 
export default Footer;