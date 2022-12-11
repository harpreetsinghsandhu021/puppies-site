import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer--logo">
          <a className="logo--link" href="#">
            <h4>Puppies</h4>
          </a>
        </div>
        <div className="footer--nav">
          <a href="#">shop</a>
          <a href="#">Lookbook</a>
          <a href="#">legal</a>
        </div>
        <div className="footer--nav">
          <a href="#">about</a>
          <a href="#">contact</a>
          <a href="#">careers</a>
        </div>
        <div className="footer--nav">
          <p>subscribe to the newsletter</p>

          <div className="email-box">
            <input type="email" placeholder="your e-mail" />
            <BsArrowRight className="arrow-svg" fill="#fff" />
          </div>
        </div>
        <div className="footer--nav">
          <p>social media</p>
          <FaFacebookF className="social--svg--1" fill="#fff" />
          <BsInstagram className="social--svg--2" fill="#fff" />
        </div>
      </div>
      <p className="copywright-text">&copy;2022Puppy.All rights reserved</p>
    </footer>
  );
}

export default Footer;
