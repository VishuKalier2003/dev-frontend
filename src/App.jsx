import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";
import "./index.css";

export default function App() {
  const auth = useAuth();

  return (
    <BrowserRouter>
      <Navbar auth={auth} />

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login auth={auth} />} />
        <Route path="/dashboard" element={<Dashboard auth={auth} />} />
      </Routes>
    </BrowserRouter>
  );
}
