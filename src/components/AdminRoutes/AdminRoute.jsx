// components/routes/AdminRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isAdmin } from "./isAdmin";
const AdminRoute = ({ children }) => {
  if (!isAdmin()) {
    return <Navigate to="/not-authorized" />; // hoặc về "/login"
  }
  return children;
};

export default AdminRoute;
