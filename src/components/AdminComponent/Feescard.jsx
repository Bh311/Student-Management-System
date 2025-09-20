
import React from 'react';

export default function StudentFeeStatusCard({ student }) {
  // Logic to determine status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-600';
      case 'Partial':
        return 'bg-blue-100 text-blue-600';
      case 'Unpaid':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-4">
      {/* Left: Student Details */}
      <div className="flex items-center space-x-4">
        {/* Using initials as a placeholder for a profile picture */}
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-gray-700 font-bold">
          {student.initials}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{student.name}</h2>
          <p className="text-xs text-gray-400">{student.id} • {student.program}</p>
        </div>
      </div>
      
      {/* Center: Fee Details and Progress Bar */}
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-end text-right">
          <span className="font-semibold text-gray-800">Total: {student.totalFees}</span>
          <span className="text-sm text-gray-500">Paid: {student.paidFees}</span>
          <span className="text-sm text-red-500">Pending: {student.pendingFees}</span>
        </div>
        <div className="w-24 bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${student.status === 'Paid' ? 'bg-green-500' : student.status === 'Partial' ? 'bg-blue-500' : 'bg-red-500'}`}
            style={{ width: student.progress }}
          ></div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
          {student.status}
        </span>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex items-center space-x-2">
        <button className="flex items-center justify-center p-2 rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">
          View
        </button>
        <button className="flex items-center justify-center p-2 rounded-lg text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">
          Receipt
        </button>
      </div>
    </div>
  );
}