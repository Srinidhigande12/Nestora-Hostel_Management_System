import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState({
    roomNumber: "",
    capacity: ""
  });

  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = () => {
    API.get("/rooms").then(res => setRooms(res.data));
  };

  const saveRoom = () => {

    // ✅ FIX: VALIDATION
    if (!room.roomNumber.trim()) {
      alert("Enter room number");
      return;
    }

    if (!room.capacity.trim()) {
      alert("Enter capacity");
      return;
    }

    if (editId) {
      API.put(`/rooms/${editId}`, room).then(() => {
        setEditId(null);
        setRoom({ roomNumber: "", capacity: "" });
        loadRooms();
      });
    } else {
      API.post("/rooms", room).then(() => {
        setRoom({ roomNumber: "", capacity: "" });
        loadRooms();
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Rooms Management</h2>

      {/* ✅ FIX BACK */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        Back
      </button>

      <input className="form-control mb-2"
        placeholder="Room Number"
        value={room.roomNumber}
        onChange={e => setRoom({...room, roomNumber: e.target.value})}
      />

      <input className="form-control mb-2"
        placeholder="Capacity"
        value={room.capacity}
        onChange={e => setRoom({...room, capacity: e.target.value})}
      />

      <button className="btn btn-success mb-3" onClick={saveRoom}>
        {editId ? "Update Room" : "Add Room"}
      </button>

      {rooms.map(r => (
  <div key={r.id} className="card p-2 mb-2">
    Room: {r.roomNumber} | Capacity: {r.capacity}

    {/* 🔥 ONLY ADMIN CAN SEE */}
    {localStorage.getItem("role") === "ADMIN" && (
      <>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => {
            setRoom(r);
            setEditId(r.id);
          }}
        >
          Edit
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => API.delete(`/rooms/${r.id}`).then(loadRooms)}
        >
          Delete
        </button>
      </>
    )}

  </div>
))}
    </div>
  );
}

export default Rooms;