import myLogo from "../../assets/logo.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

import "./style.css";
function Footer() {
  return (
    <div className="footerWrapper">
      <div className="logoWrapper">
        <img src={myLogo} alt="logo" className="footerImage" />

        <p className="rightsWrapper">
          <span>© 2020 Startupz.</span>
          <span>All rights reserved.</span>
        </p>
      </div>
      <div className="companiesWrapper">
        <div className="footerTitle">Companies</div>
        <div className="companies">
          <div className="link">Tolq</div>
          <div className="link">LegalSite</div>
          <div className="link">Codebreaker</div>
          <div className="link">Feedback Labs</div>
        </div>
      </div>
      <div className="contactWrapper">
        <div className="footerTitle">Contact</div>
        <div className="footerDescription">
          <span>World Trade Center - The Hague </span>
          <span>Prinses Margrietplantsoen 33</span>
          <span>2595 AM The Hague</span>
          <span>The Netherlands</span>
        </div>
        <div className="link">Send us an email</div>
      </div>
      <div className="socialsWrapper">
        <div className="footerTitle">Follow us</div>
        <div>
          <img src={twitter} alt="twitter" className="icon" />
        </div>
        <div>
          <img src={linkedin} alt="linkedin" className="icon" />
        </div>
        <div>
          <img src={instagram} alt="instagram" className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
