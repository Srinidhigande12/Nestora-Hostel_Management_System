import { useEffect, useState } from "react";
import API from "../services/api";

function Residents() {

  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    API.get("/residents").then(res => setData(res.data));
  };

  return (
    <div className="container mt-4">
      <h2>User History</h2>

      {data.map(r => (
        <div key={r.id} className="card p-3 mb-2">
          <strong>Name:</strong> {r.name} <br />
          <strong>Room ID:</strong> {r.roomId}
        </div>
      ))}
    </div>
  );
}

export default Residents;