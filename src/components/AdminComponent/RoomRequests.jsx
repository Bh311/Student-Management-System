import React from 'react';
import { UserRound } from 'lucide-react';

function RequestCard({ request }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-orange-100 text-orange-600';
      case 'Approved':
        return 'bg-green-100 text-green-600';
      case 'Rejected':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-gray-700 font-bold">
          {request.initials}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{request.name}</h2>
          <p className="text-xs text-gray-400">{request.id} • {request.program}</p>
          <p className="text-xs text-gray-500 mt-1">{request.preferences}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col text-right">
          <span className="text-sm text-gray-500">Submitted</span>
          <span className="text-sm text-gray-800">{request.submittedDate}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
          {request.status}
        </span>
        {request.status === 'Pending' && (
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Assign</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Reject</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function RoomRequests() {
  const requests = [
    { initials: 'AJ', name: 'Alice Johnson', id: 'STU004', program: 'Computer Science', preferences: 'Prefers Block A • Single Room', submittedDate: '2024-03-15', status: 'Pending' },
    { initials: 'BW', name: 'Bob Wilson', id: 'STU005', program: 'Mechanical Eng.', preferences: 'Prefers Block B • Double Room', submittedDate: '2024-03-14', status: 'Approved' },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Room Assignment Requests</h2>
      {requests.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
    </div>
  );
}