import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ auth }) {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="brand">Student Portal</div>
      <div className="toolbar">
        <Link to="/dashboard" className="btn ghost">Dashboard</Link>

        {auth.token ? (
          <button className="btn" onClick={() => { auth.logout(); navigate("/login"); }}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn ghost">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
