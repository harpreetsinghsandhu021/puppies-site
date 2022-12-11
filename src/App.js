import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./pages/signUp/signUp";
import LogIn from "./pages/login/login";
import Home from "./pages/Home/Home";
import Pets from "./pages/pets/pets";
import SinglePet from "./pages/OnePet/singlePet";
import Header from "./shared/UI/Header/Header";
import Footer from "./shared/UI/footer/footer";

import { AuthContext } from "./shared/context/authContext";
import { useAuth } from "./shared/hooks/authHook";

function App() {
  const { token, userId, emailId, login, logout } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id" element={<SinglePet />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/signup" replace />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userEmail: emailId,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Header />
        {routes}
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
