import React from 'react';
import Graph from '../../components/CommonComponent/Graph';
import Hero from '../../components/CommonComponent/HeroSection';
import { TrendingUp, CheckCircle, CircleDollarSign, Hotel } from 'lucide-react';

export default function Dash() {
  // Data for the first graph (CGPA Progress - Line Chart)
  const cgpaData = [
    { name: 'Sem 1', value: 7.6 },
    { name: 'Sem 2', value: 8.0 },
    { name: 'Sem 3', value: 8.5 },
    { name: 'Sem 4', value: 8.7 },
  ];

  // Data for the second graph (Monthly Attendance - Bar Chart)
  const attendanceData = [
    { name: 'Jan', value: 92 },
    { name: 'Feb', value: 90 },
    { name: 'Mar', value: 95 },
    { name: 'Apr', value: 88 },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Top section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back!</h1>
          <p className="text-sm text-gray-500">Here's what's happening with your academics.</p>
        </div>
        <span className="bg-green-100 text-green-700 font-semibold text-xs px-2 py-1 rounded-full">
          Active Student
        </span>
      </div>

      {/* Hero section with reusable Hero components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Current CGPA */}
        <Hero 
          title="Current CGPA" 
          value="8.7" 
          status="Excellent Performance" 
          icon={<TrendingUp className="text-green-600" size={20} />} 
          color="bg-green-100"
        />
        
        {/* Attendance */}
        <Hero 
          title="Attendance" 
          value="92%" 
          status="" 
          icon={<CheckCircle className="text-blue-600" size={20} />} 
          color="bg-blue-100"
        />

        {/* Pending Fees */}
        <Hero 
          title="Pending Fees" 
          value="₹0" 
          status="All Clear!" 
          icon={<CircleDollarSign className="text-green-600" size={20} />} 
          color="bg-green-100"
          statusColor="text-green-600"
        />

        {/* Hostel Room */}
        <Hero 
          title="Hostel Room" 
          value="A-205" 
          status="Block A, 2nd Floor" 
          icon={<Hotel className="text-blue-600" size={20} />} 
          color="bg-blue-100"
          statusColor="text-blue-600"
        />
      </div>

      {/* Graphs section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* First Graph: CGPA Progress (Line Chart) */}
        <Graph data={cgpaData} type="line" title="CGPA Progress" />
        
        {/* Second Graph: Monthly Attendance (Bar Chart) */}
        <Graph data={attendanceData} type="bar" title="Monthly Attendance" />
      </div>
    </div>
  );
}