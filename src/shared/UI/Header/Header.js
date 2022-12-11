import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Header() {
  const authCtx = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <h4>Puppies</h4>
        </NavLink>
      </div>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
      <div className="header--auth">
        {authCtx.isLoggedIn ? (
          <Link className="link--pet" to="/pets">
            Pets
          </Link>
        ) : (
          <Link className="link" to="/login">
            Log In
          </Link>
        )}
        {authCtx.isLoggedIn && (
          <button onClick={authCtx.logout} className="logout-btn">
            Logout
          </button>
        )}
        {authCtx.isLoggedIn ? (
          <a className="link">
            welcome {authCtx.userEmail.replace("@gmail.com", "")}
          </a>
        ) : (
          <Link className="link" to="/signup">
            Signup
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
