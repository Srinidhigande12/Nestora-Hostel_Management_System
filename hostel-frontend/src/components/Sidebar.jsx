import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#1e293b",
      color: "white",
      padding: "20px"
    }}>
      <h4>Hostel Admin</h4>

      <button className="btn btn-light w-100 mt-3" onClick={()=>navigate("/rooms")}>Rooms</button>
      <button className="btn btn-light w-100 mt-2" onClick={()=>navigate("/residents")}>Residents</button>
      <button className="btn btn-light w-100 mt-2" onClick={()=>navigate("/complaints")}>Complaints</button>
      <button className="btn btn-light w-100 mt-2" onClick={()=>navigate("/fees")}>Fees</button>
    </div>
  );
}

export default Sidebar;