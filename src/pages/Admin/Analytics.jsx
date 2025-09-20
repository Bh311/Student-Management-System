import React from 'react';
import {
  Users,
  CircleDollarSign,
  Hotel,
  FileText,
  TrendingUp,
} from 'lucide-react';
import Hero from '../../components/CommonComponent/HeroSection';
import Graph from '../../components/CommonComponent/Graph';

// Data for the graphs
const monthlyFeeData = [
  { name: 'Jan', value: 850000 },
  { name: 'Feb', value: 950000 },
  { name: 'Mar', value: 1050000 },
  { name: 'Apr', value: 1100000 },
  { name: 'May', value: 1200000 },
];

const admissionStatusData = [
  { name: 'Applied', value: 43, color: '#3B82F6' },
  { name: 'Verified', value: 29, color: '#22C55E' },
  { name: 'Enrolled', value: 23, color: '#6B46C1' },
  { name: 'Rejected', value: 5, color: '#EF4444' },
];

export default function Ana() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Top Section: Header with "Live Data" indicator */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
        <div className="flex items-center space-x-2 text-green-600 font-semibold text-sm">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span>Live Data</span>
        </div>
      </div>
      
      {/* Hero Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Pending Admissions Card */}
        <Hero
          title="Pending Admissions"
          value="248"
          status="+12% from yesterday"
          icon={<Users size={20} className="text-blue-600" />}
          color="bg-blue-100"
          statusColor="text-green-600"
        />
        
        {/* Fees Collected Card */}
        <Hero
          title="Fees Collected"
          value="₹2.4L"
          status="+8% from yesterday"
          icon={<CircleDollarSign size={20} className="text-green-600" />}
          color="bg-green-100"
          statusColor="text-green-600"
        />

        {/* Hostel Occupancy Card */}
        <Hero
          title="Hostel Occupancy"
          value="89%"
          status={null} // No status text for this card
          icon={<Hotel size={20} className="text-orange-500" />}
          color="bg-orange-100"
        />

        {/* Exam Uploads Card */}
        <Hero
          title="Exam Uploads"
          value="42"
          status="3 pending review"
          icon={<FileText size={20} className="text-purple-600" />}
          color="bg-purple-100"
          statusColor="text-blue-500"
        />
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Fee Collection Graph */}
        <Graph
          data={monthlyFeeData}
          type="line"
          title="Monthly Fee Collection"
        />
        
        {/* Admission Status Distribution Graph */}
        <Graph
          data={admissionStatusData}
          type="pie"
          title="Admission Status Distribution"
        />
      </div>
    </div>
  );
}