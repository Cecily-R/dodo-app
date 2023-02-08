import logo from "./images/dodo.png";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img src={logo} alt="logo" />
          <div className="vertical-center">
            <button>Breaking News</button> | <button>Make a Donation</button> | <button>About</button>
          </div>
        </div>
      </header>
  );
}
 
export default Navbar;