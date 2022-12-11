import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Pet from "./components/pet";

function SinglePet() {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title>pet &#8212; {id}</title>
        <meta
          name="description"
          content="check out now to bring your friend home"
        />
      </Helmet>
      <Pet id={id} />;
    </>
  );
}

export default SinglePet;
