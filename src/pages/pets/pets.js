import { useEffect, useState } from "react";
import AllPets from "./components/AllPets";
import { Helmet } from "react-helmet-async";

function Pets() {
  const [loadedDogs, setLoadedDogs] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const fetchData = await fetch(
          `https://api.thedogapi.com/v1/images/search?limit=15`,
          {
            method: "GET",
            headers: {
              "x-api-key": process.env.REACT_APP_AUTH_TOKEN,
            },
          }
        );
        const data = await fetchData.json();
        const dogs = data.map((dog) => {
          return {
            id: dog.id,
            image: dog.url,
          };
        });

        setLoadedDogs(dogs);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  if (loading) {
    return <div className="splash-screen"></div>;
  }

  return (
    <>
      <Helmet>
        <title>pets</title>
        <meta
          name="description"
          content="get a whole variety of pets for your family "
        />
      </Helmet>
      {!loading && loadedDogs && (
        <AllPets dogs={loadedDogs} isLoading={loading} />
      )}
    </>
  );
}

export default Pets;
