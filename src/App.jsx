import React from "react"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Main/WelcomePgae";
import Login from "./pages/Main/loginpage";
import StudentDash from "./pages/Main/StudentDashboard";
import AdminDash from "./pages/Main/AdminDashboard";
import setupAxiosInterceptors from './utils/axiosConfig.js'; 
import Cookies from 'js-cookie'; 

// CRITICAL: Activate the Axios interceptor globally (needed for data fetching)
setupAxicalarsInterceptors();

// WARNING: THIS IS INSECURE. This is a client-side only check.
const ProtectedRoute = ({ element, requiredRole }) => {
    // Check localStorage directly for the role and token
    const userRole = localStorage.getItem('role');
    const token = localStorage.getItem('token'); 
    
    // Simplest possible check: Is the token and role present?
    if (token && userRole === requiredRole) {
        return element; // Allow access
    } else {
        // Redirect if the check fails
        return <Navigate to="/login" />;
    }
};

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/studentdash" element={<ProtectedRoute element={<StudentDash />} requiredRole="student" />} />
                <Route path="/admindash" element={<ProtectedRoute element={<AdminDash />} requiredRole="admin" />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}