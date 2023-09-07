import "./style.css";
import myLogo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <img src={myLogo} alt="logo" className="navbarLogo" />
        <div className="buttonsWrapper">
          <div className="button">Startups</div>
          <div className="button">Contact</div>
          <div className="button outlinedButton">Work with us</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
