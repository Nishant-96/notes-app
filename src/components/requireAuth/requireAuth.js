import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth/auth-context";

export function RequireAuth({ children }) {
  const location = useLocation();
  const { token } = useAuth();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace>
      {children}
    </Navigate>
  );
}
