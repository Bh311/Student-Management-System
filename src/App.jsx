import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages//Main/WelcomePgae";
import Login from "./pages/Main/loginpage";
import StudentDash from "./pages/Main/StudentDashboard";   // ⬅️ add this
import AdminDash from "./pages/Main/AdminDashboard";       // ⬅️ add this

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentdash" element={<StudentDash />} /> {/* student route */}
        <Route path="/admindash" element={<AdminDash />} />     {/* admin route */}
      </Routes>
    </Router>
  );
}
