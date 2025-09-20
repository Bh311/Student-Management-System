import React from 'react';
import ApplicationCard from '../CommonComponent/ApplicationCard'; 

export default function RecentApplications({ applications }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Applications</h2>
      {applications.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  );
}