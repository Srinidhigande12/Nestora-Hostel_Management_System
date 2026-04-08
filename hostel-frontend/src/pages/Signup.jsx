import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER"
  });

  const signup = async () => {

  if (!user.username.trim()) {
    alert("Enter username");
    return;
  }

  if (!user.password.trim()) {
    alert("Enter password");
    return;
  }

  try {
    await API.post("/auth/signup", user);

    alert("Signup successful");
    navigate("/login");

  } catch (err) {

    console.log("ERROR:", err.response); // 🔥 DEBUG

    const msg = err.response?.data;

    // ✅ HANDLE ALL CASES
    if (msg === "User already exists") {

      const goLogin = window.confirm(
        "User already exists!\nDo you want to login?"
      );

      if (goLogin) {
        navigate("/login");
      }

    } else if (msg) {
      alert(msg); // show backend message
    } else {
      alert("Server error");
    }
  }
};

  return (
    <div className="box">

      <h2>Signup</h2>

      <input
        className="form-control mb-2"
        placeholder="Username"
        value={user.username}
        onChange={e => setUser({ ...user, username: e.target.value })}
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />

      <select
        className="form-control mb-2"
        onChange={e => setUser({ ...user, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>

      <button className="btn btn-success w-100 mb-2" onClick={signup}>
        Signup
      </button>

      {/* 👇 LOGIN OPTION */}
      <p style={{ textAlign: "center" }}>
        Already have an account?{" "}
        <span style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}>
          Login
        </span>
      </p>

    </div>
  );
}

export default Signup;