import "./hero.css";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../../shared/context/authContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="hero">
      <h1 className="hero--heading">
        Treat <span className="span-bodoni">Yourself</span> with someone{" "}
        <span className="span-cormorant">special</span>
      </h1>

      {authCtx.isLoggedIn ? (
        <NavLink to="/pets" className="hero-btn">
          Buy Now
        </NavLink>
      ) : (
        <NavLink to="/signup" className="hero-btn">
          Sign Up
        </NavLink>
      )}
    </div>
  );
}

export default HeroSection;
