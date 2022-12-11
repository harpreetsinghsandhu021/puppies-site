import { useEffect, useState } from "react";
import AllPets from "./AllPets";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJocVdmdThQd0c3OE9WcWhUc1dGVDE4cEZucUdCdG9TazdmQmJFZkE1cnlVYTlmTnRFaCIsImp0aSI6ImY2M2Q5OTkxMjc2MmZkMmQ3NzliODE5ZjFiZmNlYjcwZGZhY2NkMzk1Y2MxZGYwOTUwOWY5MTU2YWQyMWNmYTk4MzUzNDY2OTc1NDIwNTQ1IiwiaWF0IjoxNjU4NTQ2MjI5LCJuYmYiOjE2NTg1NDYyMjksImV4cCI6MTY1ODU0OTgyOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.gZQMObQfQ5T1JB6nFu-w34L7jGOBPcjw4eP1Qi16lRiLTsc2AOOdPA19cCXQFPmjxGiiRpFrUhGj0KxaqakGsWxrGG1XkMMHRjAuwugEaC0pT90qFwHDeLFCyI45LJZR7lq31R6j2AiPyGKhr84KwRZgzYddI0nEq-1_Le40Md2rxFAYtIWsM8rD0cw90QLJmKSkbQQFwnT6UYSve0VYj2gMDOgJXMxFIRxah6jF22C9KJGi2oqb0h33q7UOwbkyY_i_sFHUyJbebBx6xEhBdwZNbhqxGBFDGwFxEm--GGz8FKQLtZ3-b0cjRyoHNO0N8LJS8PlmZdiTpzAiW2b9pQ";

function SectionPets() {
  const [loadedDogs, setLoadedDogs] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const fetchData = await fetch(
          `https://api.thedogapi.com/v1/images/search?limit=6`,
          {
            method: "GET",
            headers: {
              "x-api-key": token,
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
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  return !loading && loadedDogs && <AllPets dogs={loadedDogs} />;
}

export default SectionPets;
