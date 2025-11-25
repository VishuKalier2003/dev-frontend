export default function StudentCard({ s, onEdit, onDelete }) {
  return (
    <div className="student-card">
      <h3>{s.name}</h3>
      <p><strong>Course:</strong> {s.course}</p>
      <p><strong>Email:</strong> {s.email}</p>
      <p><strong>Phone:</strong> {s.phone}</p>

      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <button className="btn ghost" onClick={() => onEdit(s)}>Edit</button>
        <button className="btn" onClick={() => onDelete(s.id)}>Delete</button>
      </div>
    </div>
  );
}
