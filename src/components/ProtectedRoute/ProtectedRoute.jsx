import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    debugger
  const isAutherised = localStorage.getItem("jwt_token");
  if (!isAutherised) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
