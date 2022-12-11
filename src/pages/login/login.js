import { useState } from "react";
import Form from "../signUp/components/Form";
import "./login.css";
import { Helmet } from "react-helmet-async";

const Login = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Login to your account to get acccess to hundreds of pet profiles"
        />
      </Helmet>
      <section className="section__login">
        <div className="form__wrapper">
          <Form login />;
        </div>
      </section>
    </>
  );
};

export default Login;

// <form onSubmit={formSubmissionHandler}>
// <div className={nameInputClasses}>
//   <label htmlFor="name">Your Name</label>
//   <input
//     type="text"
//     id="name"
//     onChange={nameInputChangeHandler}
//     onBlur={nameInputBlurHandler}
//     value={enteredName}
//   />
//   {nameInputIsInvalid && (
//     <p className="error-text">Name must not be empty.</p>
//   )}
// </div>
// <div className="form-actions">
//   <button disabled={!formIsValid}>Submit</button>
// </div>
// </form>
