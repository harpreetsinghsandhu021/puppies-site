import { motion } from "framer-motion";
import DogCard from "../../../shared/UI/pets/DogCard";
import "./allpets.css";

function AllPets({ dogs }) {
  if (dogs.length === 0) {
    return <div style={{ textAlign: "center" }}>please wait loading...</div>;
  }

  return (
    <>
      <motion.ul className="page--pets-wrapper">
        {dogs.map((dog) => {
          return <DogCard key={dog.id} isLoggedIn dog={dog} />;
        })}
      </motion.ul>
    </>
  );
}

export default AllPets;
