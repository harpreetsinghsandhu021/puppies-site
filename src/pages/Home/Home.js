import HeroSection from "./components/Hero/Hero";
import SectionParallax from "./components/parallax/parallax";
import SectionPets from "../../shared/UI/pets/sectionPets";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Puppy &#8212; Home</title>
        <meta
          name="description"
          content="get yourself a friend with our service "
        />

        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <HeroSection />
      </main>
      <SectionParallax />
      <SectionPets />
    </>
  );
}

export default Home;
