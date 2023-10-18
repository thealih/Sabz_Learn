import Landing from "../Landing/Landing";
import Navbar from "../NAvbar/Navbar";
import Topbar from "../TopBar/TopBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Topbar />
      <Navbar />
      <Landing />
    </header>
  );
};

export default Header;
