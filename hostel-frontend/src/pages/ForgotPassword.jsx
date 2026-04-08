import { useState } from "react";
import API from "../services/api";

function ForgotPassword() {

  const [data, setData] = useState({
    username: "",
    newPassword: ""
  });

  const reset = async () => {

    if (!data.username.trim()) {
      alert("Enter username");
      return;
    }

    if (!data.newPassword.trim()) {
      alert("Enter new password");
      return;
    }

    try {
      await API.post("/auth/reset", data);
      alert("Password updated successfully");

    } catch {
      alert("User not found");
    }
  };

  return (
    <div className="box">
      <h2>Reset Password</h2>

      <input className="form-control mb-2"
        placeholder="Username"
        onChange={e => setData({ ...data, username: e.target.value })}
      />

      <input className="form-control mb-2"
        placeholder="New Password"
        onChange={e => setData({ ...data, newPassword: e.target.value })}
      />

      <button className="btn-main" onClick={reset}>
        Reset Password
      </button>
    </div>
  );
}

export default ForgotPassword;