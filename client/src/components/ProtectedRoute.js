import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

// Protected Route Component
export default function ProtectedRoute() {
  const { authState } = useContext(AuthContext);

  // Check if user is authenticated
  return authState?.token ? <Outlet /> : <Navigate to="/sign-in" replace />;
}
