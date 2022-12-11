import "./form.css";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { BsFillKeyFill } from "react-icons/bs";

import { AuthContext } from "../../../shared/context/authContext";

function Form({ login }) {
  const AuthCtx = useContext(AuthContext);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const EmailIsValid = email.trim() !== "";
  const passwordIsValid = password.trim().length > 6;
  const emailInputIsInvalid = !EmailIsValid && emailTouched;
  const passwordInputIsInvalid = !passwordIsValid && passwordTouched;

  let formIsValid = false;
  if (EmailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailInputBlurHandler = () => {
    setEmailTouched(true);
  };
  const passwordInputBlurHandler = () => {
    setPasswordTouched(true);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    setEmailTouched(true);
    setPasswordTouched(true);

    if (!login) {
      try {
        const sendRequest = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        const res = await sendRequest.json();

        if (!sendRequest.ok) {
          throw new Error(res.error.message);
        }
        AuthCtx.login(res.localId, res.idToken, res.email);
        if (sendRequest.ok === true) {
          navigate("/");
        }
      } catch (err) {
        setError(err.message);
      }
    } else {
      try {
        const sendRequest = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        const res = await sendRequest.json();

        if (!sendRequest.ok) {
          throw new Error(res.error.message);
        }

        AuthCtx.login(res.localId, res.idToken, res.email);

        if (sendRequest.ok === true) {
          navigate("/");
        }
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    }
  };

  const lastContent = login
    ? `dont have an account?`
    : `already have an account?`;

  const inputClasses = emailInputIsInvalid ? "input--invalid" : "input";
  const inputClasses2 = passwordInputIsInvalid ? "input--invalid" : "input";

  return (
    <>
      <form className="signup__form" onSubmit={onSubmitHandler}>
        <h2 className="signup__heading">{login ? "Login" : "Sign Up"}</h2>
        <p className="signup__greeting">
          {login
            ? "hey, enter your credentials to login to your account"
            : "Hey, Enter your details to create your account"}
        </p>

        <label className="label-email" htmlFor="email">
          <FiMail stroke="#9a9a9a" />
        </label>

        {error && (
          <p
            style={{
              position: "absolute",
              top: "35%",
              fontSize: "1.4rem",
              color: " #ff7070",
            }}
          >
            {error}
          </p>
        )}
        <input
          className={inputClasses}
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          required
          value={email}
          placeholder="Enter Your Email"
          type="email"
          id="email"
        />

        <label className="label-password" htmlFor="password">
          <BsFillKeyFill fill="#9a9a9a" />
        </label>
        <input
          className={inputClasses2}
          onBlur={passwordInputBlurHandler}
          onInput={passwordInputHandler}
          required
          placeholder="Password"
          value={password}
          type="password"
          id="password"
        />

        <button className="btn-cta" disabled={!formIsValid}>
          Submit
        </button>
        <p className="login-ack">
          {lastContent}
          {login ? (
            <NavLink className="login-ack-link" to="/signup">
              signup here
            </NavLink>
          ) : (
            <NavLink className="login-ack-link" to="/login">
              login now
            </NavLink>
          )}
        </p>
      </form>
    </>
  );
}

export default Form;
