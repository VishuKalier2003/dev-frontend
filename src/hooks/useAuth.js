import { useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState(() => localStorage.getItem("authToken"));
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem("userEmail"));

  const login = (tok, email) => {
    if (tok) localStorage.setItem("authToken", tok);
    if (email) localStorage.setItem("userEmail", email);
    setToken(tok);
    setUserEmail(email);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setToken(null);
    setUserEmail(null);
  };

  return { token, userEmail, login, logout };
}
