import "./dogcard.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { GiLifeBar } from "react-icons/gi";

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function DogCard({ dog, isLoggedIn }) {
  const authCtx = useContext(AuthContext);

  const name = dog.info && dog.info.name ? dog.info.name.slice(-20) : "susan";
  return (
    <motion.div className="pet--card">
      <motion.div className="pet--img--box">
        <motion.img
          whileTap={{ pointerEvents: "none" }}
          className="pet--img"
          src={dog.image}
          alt="dog"
        />
        <h2 className="pet--name">{name}</h2>
      </motion.div>
      <div className="pet--info--wrapper">
        {dog.info ? (
          <div className="pet--info">
            <div className="pet--info__header">
              <p>
                <FaPaw />
                {dog.info.breed_group}
              </p>
              <p>
                <AiOutlineColumnHeight />
                {dog.info.height.metric}cm
              </p>
              <p>
                <AiOutlineColumnWidth />
                {dog.info.weight.metric}cm
              </p>
              <p>
                <GiLifeBar />
                {dog.info.life_span}
              </p>
            </div>
            <div className="pet-desc">
              <p>
                {dog.info.name} is a {dog.info.temperament} which are known for{" "}
                {dog.info.bred_for}
              </p>
            </div>
            <div className="cta">
              <NavLink
                className="card--link"
                to={authCtx.isLoggedIn ? `/pets/${dog.id}` : "/signup"}
              >
                {authCtx.isLoggedIn ? "Buy Now" : "Sign Up to see more"}
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="pet--info">
            <div className="pet--info__header">
              <p>
                <FaPaw />
                boxer
              </p>
              <p>
                <AiOutlineColumnHeight />
                13-25
              </p>
              <p>
                <AiOutlineColumnWidth />
                15-37
              </p>
              <p>
                <GiLifeBar />
                15 -17 years
              </p>
            </div>
            <div className="pet-desc">
              <p>
                susan is a graceful,medium sized dog with a sleek muscular body
                known for its athletic skills
              </p>
            </div>
            <div className="cta">
              <NavLink
                className="card--link"
                to={authCtx.isLoggedIn ? `/pets/${dog.id}` : "/signup"}
              >
                {authCtx.isLoggedIn ? "Buy Now" : "Sign Up to see more"}
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default DogCard;
