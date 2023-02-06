import logo from "./images/dodo.png";
import redlist from "./images/red_list_logo_50.png"

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img src={logo} alt="logo" />
          <div class="vertical-center">
            <a>Breaking News</a> | <a>Make a Donation</a> | <a>About</a>
          </div>
        </div>
      </header>
  );
}
 
export default Navbar;