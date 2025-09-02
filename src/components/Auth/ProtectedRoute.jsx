import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const token = localStorage.getItem('adminToken');

    // If there's a token, render the child routes (e.g., dashboard, edit form)
    // Otherwise, redirect to the login page
    return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;