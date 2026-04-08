import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

import Rooms from "./pages/Rooms";
import Residents from "./pages/Residents";
import Fees from "./pages/Fees";
import Complaints from "./pages/Complaints";

function App() {

  // ✅ FIX: always get role here
  const role = localStorage.getItem("role");

  // 🔐 Protected Route
  const ProtectedRoute = ({ children, allowedRole }) => {

    if (!role) {
      return <Navigate to="/login" />;
    }

    if (allowedRole && role !== allowedRole) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            role === "ADMIN"
              ? <AdminDashboard />
              : <Navigate to="/login" />
          }
        />

        {/* User */}
        <Route
          path="/user"
          element={
            role === "USER"
              ? <UserDashboard />
              : <Navigate to="/login" />
          }
        />

        {/* Common */}
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />

        <Route
          path="/residents"
          element={
            <ProtectedRoute allowedRole="ADMIN">
              <Residents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fees"
          element={
            <ProtectedRoute>
              <Fees />
            </ProtectedRoute>
          }
        />

        <Route
          path="/complaints"
          element={
            <ProtectedRoute>
              <Complaints />
            </ProtectedRoute>
          }
        />

        {/* Default */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;