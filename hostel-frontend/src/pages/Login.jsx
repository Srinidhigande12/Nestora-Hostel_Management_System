import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const [show, setShow] = useState(false);

  const login = async () => {

    if (!data.username.trim()) {
      alert("Enter username");
      return;
    }

    if (!data.password.trim()) {
      alert("Enter password");
      return;
    }

    try {
      const res = await API.post("/auth/login", data);

      console.log("LOGIN RESPONSE:", res.data);

      // 🔥 CLEAR OLD ROLE (VERY IMPORTANT)
      // REMOVE duplicate clear
localStorage.clear();

const role =
  res.data.role ||
  res.data.user?.role ||
  res.data.data?.role;

const finalRole = (role || "USER").toUpperCase();

console.log("FINAL ROLE:", finalRole);

localStorage.setItem("role", finalRole);

if (finalRole === "ADMIN") {
  window.location.href = "/admin"; // 🔥 FORCE REFRESH
} else {
  window.location.href = "/user";  // 🔥 FORCE REFRESH
}
    } catch (err) {

      const msg = err.response?.data;

      if (msg === "User not found") {
        alert("User not found");
      } else if (msg === "Invalid password") {
        alert("Incorrect password");
      } else {
        alert("Login failed");
      }
    }
  };

  return (
    <div className="box">

      <h2>Login</h2>

      <input
        className="form-control mb-2"
        placeholder="Username"
        value={data.username}
        onChange={e => setData({ ...data, username: e.target.value })}
      />

      <input
        type={show ? "text" : "password"}
        className="form-control mb-2"
        placeholder="Password"
        value={data.password}
        onChange={e => setData({ ...data, password: e.target.value })}
      />

      <button
        className="btn btn-secondary mb-2 w-100"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Password" : "Show Password"}
      </button>

      <button
        className="btn btn-primary w-100 mb-2"
        onClick={login}
      >
        Login
      </button>

      <p style={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Signup
        </span>
      </p>

      <p
        style={{ textAlign: "center", color: "blue", cursor: "pointer" }}
        onClick={() => navigate("/forgot")}
      >
        Forgot Password?
      </p>

    </div>
  );
}

export default Login;