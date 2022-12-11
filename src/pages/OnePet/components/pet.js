import { useEffect, useState } from "react";
import "./pet.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

function Pet({ id }) {
  const [loadedDog, setLoadedDog] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const fetchData = await fetch(
          `https://api.thedogapi.com/v1/images/${id}`,
          {
            method: "GET",
            headers: {
              "x-api-key": process.env.REACT_APP_AUTH_TOKEN,
            },
          }
        );
        const data = await fetchData.json();
        const dog = {
          image: data.url,
          bredFor: data.breeds[0].bred_for,
          bredGroup: data.breeds[0].bred_group,
          name: data.breeds[0].name,
          lifeSpan: data.breeds[0].life_span,
          temperament: data.breeds[0].temperament,
        };

        setLoadedDog(dog);
        console.log(dog);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  return (
    loadedDog && (
      <div className="single--pet--wrapper">
        <div className="pet--image--box">
          <img src={loadedDog.image} />
        </div>
        <div className="pet--desc">
          <div className="pet--desc-inner">
            <h2 className="single--pet--name">
              {loadedDog.name}
              <div className="ratings">
                <AiFillStar fill="gold" className="star--svg" />
                <AiFillStar fill="gold" className="star--svg" />
                <AiFillStar fill="gold" className="star--svg" />
                <AiFillStar fill="gold" className="star--svg" />
                <AiOutlineStar className="star--svg" />
              </div>
            </h2>

            <p style={{ width: "85%" }}>{loadedDog.bredFor}</p>
            <p>{loadedDog.lifeSpan}</p>
            <p>
              {loadedDog.bredGroup ? loadedDog.bredGroup : "mountain hiker"}
            </p>
            <p>
              {loadedDog.name} is a {loadedDog.temperament}
            </p>
            <div className="cta-checkout">
              <button className="btn-checkout">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Pet;
