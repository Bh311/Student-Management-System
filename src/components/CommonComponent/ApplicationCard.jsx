import React from 'react';
import { Eye, CheckCircle, XCircle, UserRound } from 'lucide-react';

export default function ApplicationCard({ application }) {
  // Determine the color of the status badge based on the application status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied':
        return 'bg-blue-100 text-blue-600';
      case 'Verified':
        return 'bg-green-100 text-green-600';
      case 'Enrolled':
        return 'bg-purple-100 text-purple-600';
      case 'Rejected':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Define the action handlers
  const handleView = () => {
    console.log(`Viewing application for ${application.name}`);
    // You would typically navigate to a detailed view page or open a modal here
  };

  const handleVerify = () => {
    console.log(`Verifying application for ${application.name}`);
    // You would call an API here to update the application status to 'Verified'
  };

  const handleReject = () => {
    console.log(`Rejecting application for ${application.name}`);
    // You would call an API here to update the application status to 'Rejected'
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-4">
      {/* Left side: User details */}
      <div className="flex items-center space-x-4">
        <UserRound size={48} className="text-gray-400" />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{application.name}</h2>
          <p className="text-sm text-gray-500">{application.email}</p>
          <p className="text-xs text-gray-400 mt-1">{application.id} • {application.program}</p>
        </div>
      </div>

      {/* Right side: Grade, Submitted Date, Status, and Action Buttons */}
      <div className="flex items-center space-x-4">
        {/* Grade and Submitted Date */}
        <div className="flex flex-col items-end text-right">
          <span className="font-semibold text-gray-800">Grade: {application.grade}</span>
          <span className="text-sm text-gray-500">Submitted: {application.submittedDate}</span>
        </div>

        {/* Status Badge and Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* Status Badge - Conditionally shown based on status */}
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
            {application.status}
          </span>
          
          {/* Action Buttons */}
          <button
            onClick={handleView}
            className="flex items-center justify-center p-2 rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Eye size={20} />
            <span className="ml-1">View</span>
          </button>

          {/* Conditional "Verify" and "Reject" buttons for 'Applied' status */}
          {application.status === 'Applied' && (
            <>
              <button
                onClick={handleVerify}
                className="flex items-center justify-center p-2 rounded-lg text-green-600 bg-green-100 hover:bg-green-200 transition-colors"
              >
                <CheckCircle size={20} />
                <span className="ml-1">Verify</span>
              </button>
              <button
                onClick={handleReject}
                className="flex items-center justify-center p-2 rounded-lg text-red-600 bg-red-100 hover:bg-red-200 transition-colors"
              >
                <XCircle size={20} />
                <span className="ml-1">Reject</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}