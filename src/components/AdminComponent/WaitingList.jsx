import React from 'react';
import { UserRound } from 'lucide-react';

function WaitingCard({ entry }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-full text-blue-600 bg-blue-100 font-bold">
          #{entry.rank}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{entry.name}</h2>
          <p className="text-xs text-gray-400">{entry.id} • {entry.program}</p>
          <p className="text-xs text-gray-500 mt-1">Prefers {entry.preference}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex flex-col text-right">
          <span className="text-sm text-gray-500">Waiting since</span>
          <span className="text-sm text-gray-800">{entry.waitingSince}</span>
        </div>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          Notify Available
        </button>
      </div>
    </div>
  );
}

export default function WaitingList() {
  const waitingEntries = [
    { rank: 1, name: 'Carol Brown', id: 'STU006', program: 'Electrical Eng.', preference: 'Block A', waitingSince: '2024-03-10' },
    { rank: 2, name: 'David Lee', id: 'STU007', program: 'Civil Eng.', preference: 'Block C', waitingSince: '2024-03-12' },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Waiting List</h2>
      {waitingEntries.map((entry) => (
        <WaitingCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
}