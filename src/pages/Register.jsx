import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [confirm, setConfirm]     = useState("");
  const [error, setError]         = useState("");

  const navigate = useNavigate();

  const submit = async () => {
    if (!fullName || !email || !password || !confirm)
      return setError("Fill all fields");

    if (password !== confirm)
      return setError("Passwords do not match");

    try {
      await axiosClient.post("/api/auth/register", {
        fullName, email, password, confirmPassword: confirm,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <div className="form">
        {error && <div style={{ color: "red" }}>{error}</div>}

        <input className="input" placeholder="Full Name"
               value={fullName} onChange={(e) => setFullName(e.target.value)} />

        <input className="input" placeholder="Email"
               value={email} onChange={(e) => setEmail(e.target.value)} />

        <input className="input" type="password" placeholder="Password"
               value={password} onChange={(e) => setPassword(e.target.value)} />

        <input className="input" type="password" placeholder="Confirm Password"
               value={confirm} onChange={(e) => setConfirm(e.target.value)} />

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button className="btn" onClick={submit}>Register</button>
          <Link className="btn ghost" to="/login">Already have account?</Link>
        </div>
      </div>
    </div>
  );
}
