import React, { useState } from "react";
import { BarChart2, UserPlus, CreditCard, Hotel, FileUp ,} from "lucide-react";
import Header from "../../components/CommonComponent/DashHead";
import Sidebar from "../../components/CommonComponent/DashBar";
import Analytics from "../Admin/Analytics";
import VerifyAdmissions from "../Admin/VerifyStud";
import ManageFees from "../Admin/FeeManage";
import HostelManagement from "../Admin/HostelManage";
import ExamUploads from "../Admin/ExamUploads";

// Define the menu items for the admin role
// Corrected adminMenuItems
const adminMenuItems = [
  { id: "analytics", label: "Analytics", icon: BarChart2 },
  { id: "verify-admissions", label: "Verify Admissions", icon: UserPlus },
  { id: "manage-fees", label: "Manage Fees", icon: CreditCard },
  { id: "hostel-management", label: "Hostel Management", icon: Hotel },
  { id: "exam-uploads", label: "Exam Uploads", icon: FileUp }, 
];

export default function AdminDash() {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");
  const [activeItem, setActiveItem] = useState("analytics"); // Default to 'analytics'

  // Function to conditionally render content based on activeItem state
  const renderContent = () => {
    switch (activeItem) {
      case "analytics":
        return <Analytics />;
      case "verify-admissions":
        return <VerifyAdmissions />;
      case "manage-fees":
        return <ManageFees />;
      case "hostel-management":
        return <HostelManagement />;
      case "exam-uploads":
        return <ExamUploads />;  
      default:
        return <Analytics />; // Fallback to Analytics
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header role={role} email={email} />
      <div className="flex flex-1">
        {/* Sidebar (fixed width) */}
        <Sidebar
          menuItems={adminMenuItems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        {/* Content area (fills remaining space) */}
        <div className="flex-1 overflow-auto">{renderContent()}</div>
      </div>
    </div>
  );
}
