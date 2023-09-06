import "./style.css";
import myLogo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={myLogo} alt="SVGimage" />
      <div className="buttonsWrapper">
        <div className="button">Startups</div>
        <div className="button">Contact</div>
        <div className="button outlinedButton">Work with us</div>
      </div>
    </div>
  );
};

export default Navbar;
