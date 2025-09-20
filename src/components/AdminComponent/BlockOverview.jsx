import React from 'react';

function BlockCard({ block }) {
  const getOccupancyColor = (occupancy) => {
    if (occupancy >= 90) return 'bg-red-500';
    if (occupancy >= 80) return 'bg-orange-500';
    return 'bg-green-500';
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-800">{block.name}</h3>
      <span className="text-sm text-gray-500">{block.floors} Floors</span>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xl font-bold text-gray-700">{block.roomsOccupied}/{block.totalRooms}</p>
          <span className="text-sm text-gray-500">Rooms</span>
        </div>
        <div>
          <p className="text-xl font-bold text-gray-700">{block.bedsOccupied}/{block.totalBeds}</p>
          <span className="text-sm text-gray-500">Beds</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-700 mb-1">Occupancy {block.occupancy}%</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${getOccupancyColor(block.occupancy)}`}
            style={{ width: `${block.occupancy}%` }}
          ></div>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <h4 className="font-semibold">Amenities</h4>
        <p className="mt-1">{block.amenities.join(', ')}</p>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">View Rooms</button>
        <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Manage</button>
      </div>
    </div>
  );
}

export default function BlockOverview() {
  const blocks = [
    { name: 'Block A', floors: 5, roomsOccupied: 45, totalRooms: 50, bedsOccupied: 89, totalBeds: 100, occupancy: 89, amenities: ['WiFi', 'AC', 'Laundry', 'Common Room'] },
    { name: 'Block B', floors: 4, roomsOccupied: 38, totalRooms: 40, bedsOccupied: 76, totalBeds: 80, occupancy: 95, amenities: ['WiFi', 'Fan', 'Laundry', 'Study Hall'] },
    { name: 'Block C', floors: 6, roomsOccupied: 52, totalRooms: 60, bedsOccupied: 104, totalBeds: 120, occupancy: 87, amenities: ['WiFi', 'AC', 'Laundry', 'Gym', 'Cafeteria'] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blocks.map((block) => (
        <BlockCard key={block.name} block={block} />
      ))}
    </div>
  );
}