import redlist from "./css/red_list_logo_50.png"

const Footer = () => {

  return (
    <header>
      <div className="footer">
        Click on an area to see the species in the animal kingdom that need our help the most.<br />
        Built by Anthony, Cecily, JC, Mike and Naila. Uses the IUCN Red List API for information.<br /><br />
       <a href="https://www.iucnredlist.org/" target="_blank" rel="noreferrer">
        <img src={ redlist } alt="redlist" />
        </a><br />
        IUCN 2022. IUCN Red List of Threatened Species. Version 2022-2.
      </div>
    </header>
  );
}
 
export default Footer;