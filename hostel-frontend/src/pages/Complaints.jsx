import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Complaints() {

  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    API.get("/complaints").then(res => setData(res.data));
  };

  const add = () => {

  if (!text.trim()) {
    alert("Enter complaint");
    return;
  }

  API.post("/complaints", {
    description: text
  })
    .then(() => {
      alert("Complaint submitted successfully ✅");
      setText("");
      load();
    })
    .catch((err) => {
      console.log("ERROR:", err.response?.data); // 🔥 DEBUG
      alert(err.response?.data || "Error submitting complaint");
    });
};

  const markSolved = (id) => {
    API.put(`/complaints/${id}`, { status: "Solved" })
      .then(load);
  };

  return (
    <div className="container mt-4">
      <h2>Complaints</h2>

      {/* ✅ FIX BACK */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        Back
      </button>

      <input className="form-control mb-2"
        placeholder="Enter complaint"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button className="btn btn-danger mb-3" onClick={add}>
        Submit
      </button>

      {data.map(c => (
        <div key={c.id} className="card p-2 mb-2">

          {c.description}

          <br />

          <strong>Status:</strong> {c.status || "Pending"}

          <br />

          {c.status !== "Solved" && (
            <button
              className="btn btn-success btn-sm mt-2"
              onClick={() => markSolved(c.id)}
            >
              Mark as Solved
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Complaints;