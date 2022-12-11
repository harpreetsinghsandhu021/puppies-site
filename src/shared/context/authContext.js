import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userEmail: null,
  userId: null,
  login: () => {},
  logout: () => {},
});
