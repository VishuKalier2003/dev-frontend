import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

export default function Login({ auth }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");

  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await axiosClient.post("/api/auth/login", { email, password });

      let token = typeof res.data === "string" ? "SIMPLE" : res.data.token;
      auth.login(token, email);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <div className="form">
        {error && <div style={{ color: "red" }}>{error}</div>}

        <input className="input" placeholder="Email"
               value={email} onChange={(e) => setEmail(e.target.value)} />

        <input className="input" type="password" placeholder="Password"
               value={password} onChange={(e) => setPassword(e.target.value)} />

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button className="btn" onClick={submit}>Login</button>
          <Link className="btn ghost" to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
