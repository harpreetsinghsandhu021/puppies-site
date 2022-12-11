import DogCard from "./DogCard";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./allPets.css";

function AllPets({ dogs }) {
  const [width, setWidth] = useState();
  const carousel = useRef();
  useEffect(() => {
    if (carousel.current) {
      setWidth(
        (carousel.current.clientWidth - carousel.current.clientHeight) * 1.65
      );
    }
  }, []);
  if (dogs.length === 0) {
    return <div style={{ textAlign: "center" }}>please wait loading...</div>;
  }

  return (
    <motion.ul className="pets-wrapper">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="inner-wrapper"
      >
        {dogs.map((dog) => {
          return <DogCard key={dog.id} dog={dog} />;
        })}
      </motion.div>
    </motion.ul>
  );
}

export default AllPets;
