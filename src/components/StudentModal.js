import { useEffect, useState } from "react";

export default function StudentModal({ open, onClose, onSave, initial }) {
  const [form, setForm] = useState(initial || { name: "", course: "", email: "", phone: "" });

  useEffect(() => {
    setForm(initial || { name: "", course: "", email: "", phone: "" });
  }, [initial]);

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{initial ? "Edit Student" : "Add Student"}</h3>

        <input className="input" placeholder="Name" value={form.name}
               onChange={(e) => setForm({ ...form, name: e.target.value })} />

        <input className="input" placeholder="Course" value={form.course}
               onChange={(e) => setForm({ ...form, course: e.target.value })} />

        <input className="input" placeholder="Email" value={form.email}
               onChange={(e) => setForm({ ...form, email: e.target.value })} />

        <input className="input" placeholder="Phone" value={form.phone}
               onChange={(e) => setForm({ ...form, phone: e.target.value })} />

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button className="btn" onClick={() => onSave(form)}>Save</button>
          <button className="btn ghost" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
