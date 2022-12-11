import { useState, useCallback, useEffect } from "react";

export function useAuth() {
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();
  const [emailId, setEmailId] = useState();

  const login = useCallback((uid, tkn, email) => {
    setToken(tkn);
    setUserId(uid);
    setEmailId(email);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: tkn,
        email: email,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setEmailId(null);

    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (storedData && storedData.token) {
      login(storedData.userId, storedData.token, storedData.email);
    }
  });

  return { token, userId, emailId, login, logout };
}
