import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AdminDashboard() {
  const navigate = useNavigate();

  // 🔐 Protect route
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "ADMIN") {
      navigate("/login");
    }
  }, [navigate]);

  // 🔐 Logout
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h3>NESTORA (ADMIN)</h3>

        <button className="btn btn-light mb-2" onClick={() => navigate("/rooms")}>
          Manage Rooms
        </button>

        <button className="btn btn-light mb-2" onClick={() => navigate("/residents")}>
          Manage Users
        </button>

        <button className="btn btn-light mb-2" onClick={() => navigate("/fees")}>
          Fees Records
        </button>

        <button className="btn btn-light mb-2" onClick={() => navigate("/complaints")}>
          Complaints
        </button>

        <button className="btn btn-danger mt-3" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="content">
        <h2>Admin Dashboard</h2>

        <div className="row mt-4">

          <div className="col-md-3">
            <div className="card p-3 shadow">Users</div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow">Rooms</div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow">Fees</div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow">Complaints</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default AdminDashboard;