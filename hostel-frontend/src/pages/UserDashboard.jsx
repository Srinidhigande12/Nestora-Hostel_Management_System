import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserDashboard() {
  const navigate = useNavigate();

  // 🔐 Protect route
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "USER") {
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
        <h3>NESTORA (USER)</h3>

        <button className="btn btn-light mb-2" onClick={() => navigate("/fees")}>
          Pay Fees
        </button>

        <button className="btn btn-light mb-2" onClick={() => navigate("/complaints")}>
          Submit Complaint
        </button>

        <button className="btn btn-light mb-2" onClick={() => navigate("/rooms")}>
          My Room
        </button>

        <button className="btn btn-danger mt-3" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="content">
        <h2>User Dashboard</h2>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card p-3 shadow">Pay Fees 💰</div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">Complaints 📝</div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">Room Details 🛏️</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default UserDashboard;