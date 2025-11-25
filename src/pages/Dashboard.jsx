import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import StudentCard from "../components/StudentCard";
import StudentModal from "../components/StudentModal";

export default function Dashboard({ auth }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing]   = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) return navigate("/login");
    loadStudents();
  }, [auth.token]);

  const loadStudents = async () => {
    setLoading(true);
    const res = await axiosClient.get("/api/students");
    setStudents(res.data);
    setLoading(false);
  };

  const save = async (student) => {
    if (editing) {
      await axiosClient.put(`/api/students/${editing.id}`, student);
    } else {
      await axiosClient.post(`/api/students`, student);
    }

    setModalOpen(false);
    setEditing(null);
    loadStudents();
  };

  const del = async (id) => {
    if (window.confirm("Delete student?")) {
      await axiosClient.delete(`/api/students/${id}`);
      loadStudents();
    }
  };

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Students</h2>
        <button className="btn" onClick={() => { setEditing(null); setModalOpen(true); }}>
          + Add Student
        </button>
      </div>

      <div className="card-grid" style={{ marginTop: 16 }}>
        {loading ? "Loading..." : (
          students.length === 0
            ? <div>No students yet</div>
            : students.map(s => <StudentCard key={s.id} s={s} onEdit={(st) => { setEditing(st); setModalOpen(true); }} onDelete={del} />)
        )}
      </div>

      <StudentModal open={modalOpen} onClose={() => setModalOpen(false)} initial={editing} onSave={save} />

      <div className="footer">Logged in as: {auth.userEmail}</div>
    </div>
  );
}
