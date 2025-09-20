import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Hero from '../../components/CommonComponent/HeroSection';
import StatusFilter from '../../components/AdminComponent/StatusFilter';
import RecentApplications from '../../components/AdminComponent/RecentApplication';

export default function VerifyAdmissions() {
  // Application data is now defined in the parent component
  const recentApplications = [
    {
      id: 'APP001',
      name: 'John Smith',
      email: 'john.smith@email.com',
      program: 'Computer Science',
      grade: '95%',
      submittedDate: '2024-03-15',
      status: 'Applied',
    },
    {
      id: 'APP002',
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      program: 'Mechanical Engineering',
      grade: '88%',
      submittedDate: '2024-03-14',
      status: 'Verified',
    },
    {
      id: 'APP003',
      name: 'Mike Davis',
      email: 'mike.davis@email.com',
      program: 'Business Administration',
      grade: '92%',
      submittedDate: '2024-03-12',
      status: 'Enrolled',
    },
  ];

  // State to manage the selected filter option
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  // Filter the applications based on the selected status
  const filteredApplications = recentApplications.filter(app => {
    if (selectedStatus === 'All Status') {
      return true; // Show all applications
    }
    return app.status === selectedStatus;
  });

  return (
    <div className="p-8 bg-gray-100">
      {/* Header section with Title, Search, and Filter */}
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Verify Admissions</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-2">
            <Search size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search applications..."
              className="bg-transparent border-none focus:outline-none ml-2 text-gray-700"
            />
          </div>
          {/* StatusFilter now receives props to control its state */}
          <StatusFilter selectedOption={selectedStatus} setSelectedOption={setSelectedStatus} />
        </div>
      </div>
      
      {/* Hero cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Hero title="New Applications" value="248" valueColor="text-blue-600" />
        <Hero title="Verified" value="156" valueColor="text-green-600" />
        <Hero title="Enrolled" value="89" valueColor="text-purple-600" />
        <Hero title="Pending Review" value="12" valueColor="text-red-600" />
      </div>

      {/* Pass the filtered data to RecentApplications */}
      <RecentApplications applications={filteredApplications} />
    </div>
  );
}