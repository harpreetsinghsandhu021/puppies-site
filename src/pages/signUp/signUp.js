import SignUpForm from "./components/signUpForm";
import { Helmet } from "react-helmet-async";

function SignUp() {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta
          name="description"
          content="sign up to puppy service which gives you acccess to hundreds of pet profiles and dealings"
        />
      </Helmet>
      <SignUpForm />;
    </>
  );
}

export default SignUp;
