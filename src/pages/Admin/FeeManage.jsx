// src/components/Admin/FeeManage.jsx
import React, { useState } from 'react';
import { Search, RotateCw, CircleDollarSign } from 'lucide-react';
import Hero from '../../components/CommonComponent/HeroSection';
import StudentFeeStatusCard from '../../components/AdminComponent/Feescard'; // Import the new component

export default function ManageFees() {
  // Mock data for the Hero sections
  const heroData = {
    totalCollected: "₹12.4L",
    pendingAmount: "₹3.2L",
    collectionRate: "79%",
    overdue: "₹85K"
  };

  // State for the student fee status list
  const [studentFeeData, setStudentFeeData] = useState([
    {
      id: "STU001",
      initials: "JD",
      name: "John Doe",
      program: "Computer Science",
      totalFees: "₹102K",
      paidFees: "₹75K",
      pendingFees: "₹27K",
      progress: "74%",
      status: "Partial",
    },
    {
      id: "STU002",
      initials: "SJ",
      name: "Sarah Johnson",
      program: "Mechanical Eng.",
      totalFees: "₹98K",
      paidFees: "₹98K",
      pendingFees: "₹0K",
      progress: "100%",
      status: "Paid",
    },
    {
      id: "STU003",
      initials: "MD",
      name: "Mike Davis",
      program: "Business Admin",
      totalFees: "₹85K",
      paidFees: "₹0K",
      pendingFees: "₹85K",
      progress: "0%",
      status: "Unpaid",
    },
  ]);

  // Handler for updating student status (can be used for 'View' or 'Receipt')
  const handleUpdateStatus = (studentId, newStatus) => {
    console.log(`Updating status for student ${studentId} to ${newStatus}`);
    // You would typically send an API request here
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* Header with Title and Sync Button */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Fee Management</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-2">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search students..."
              className="bg-transparent border-none focus:outline-none ml-2 text-gray-700"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <RotateCw size={16} />
            <span>Sync Payments</span>
          </button>
        </div>
      </div>
      
      {/* Hero Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Hero
          title="Total Collected"
          value={heroData.totalCollected}
          status="+8% from last month"
          icon={<CircleDollarSign size={20} className="text-green-600" />}
          color="bg-green-100"
          statusColor="text-green-600"
        />
        <Hero
          title="Pending Amount"
          value={heroData.pendingAmount}
          status="45 students"
          icon={<CircleDollarSign size={20} className="text-orange-500" />}
          color="bg-orange-100"
          statusColor="text-gray-500"
        />
        <Hero
          title="Collection Rate"
          value={heroData.collectionRate}
          status={null}
          icon={<CircleDollarSign size={20} className="text-blue-600" />}
          color="bg-blue-100"
        />
        <Hero
          title="Overdue"
          value={heroData.overdue}
          status="12 students"
          icon={<CircleDollarSign size={20} className="text-red-600" />}
          color="bg-red-100"
        />
      </div>

      {/* Student Fee Status Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Student Fee Status</h2>
        {studentFeeData.map((student) => (
          <StudentFeeStatusCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}