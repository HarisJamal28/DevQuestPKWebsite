import React from "react";
import "./footer.css";

const Footer = ({ theme }) => {
  const GoogleImg =
    theme === "dark"
      ? "https://i.imgur.com/tVqLNnR.png"
      : "https://i.imgur.com/6J6NMYO.png";

  const AppleImg =
    theme === "dark"
      ? "https://i.imgur.com/C68ht9M.png"
      : "https://i.imgur.com/Ut8yt1o.png";

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Pricing</li>
              <li>Solutions</li>
              <li>Education</li>
              <li>Team plans</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About us</h4>
            <ul>
              <li>About</li>
              <li>Branding</li>
              <li>Newsroom</li>
              <li>Partnerships</li>
              <li>Affiliates</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help and support</h4>
            <ul>
              <li>Help center</li>
              <li>Contact us</li>
              <li>Privacy & Terms</li>
              <li>Safety information</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Community</h4>
            <ul>
              <li>Agencies</li>
              <li>Freelancers</li>
              <li>Engineers</li>
            </ul>
          </div>
        </div>

        <div className="footer-apps">
          <img src={GoogleImg} alt="App Store" />
          <img src={AppleImg} alt="Google Play" />
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">©copyright 2025 DevQuest Pakistan</p>
        <div className="footer-bottom-links">
          <span>Help</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
        <div className="footer-socials"></div>
        <div className="footer-language">
          English (United States) <span>▼</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
