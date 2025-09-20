import React from 'react';
import { MapPin, Users, Calendar, Wifi, Bell, BookOpen, Utensils } from 'lucide-react';

export default function HostelDetails() {
    const studentInfo = {
        room: 'A-205',
        block: 'Block A, 2nd Floor',
        sharing: 'Double Sharing',
        occupants: 2,
        rent: '₹8,000',
        amenities: ['AC', 'WiFi', 'Study Table', 'Wardrobe'],
        roommate: 'Mike Smith',
        roommateProgram: 'Computer Science',
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Hostel Information</h2>
                <span className="bg-green-100 text-green-700 font-semibold text-xs px-2 py-1 rounded-full">Room Assigned</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Room Details */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <MapPin size={24} className="text-blue-500" />
                        <div>
                            <p className="font-bold text-gray-800">{studentInfo.room}</p>
                            <p className="text-sm text-gray-500">{studentInfo.block}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <Users size={24} className="text-blue-500" />
                        <div>
                            <p className="font-bold text-gray-800">{studentInfo.sharing}</p>
                            <p className="text-sm text-gray-500">{studentInfo.occupants} occupants</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
                        <Calendar size={24} className="text-blue-500" />
                        <div>
                            <p className="font-bold text-gray-700">Monthly Rent</p>
                            <p className="text-sm text-gray-500">{studentInfo.rent}</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Amenities & Roommate */}
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold text-gray-700 mb-2">Room Amenities</h3>
                        <div className="flex flex-wrap gap-2">
                            {studentInfo.amenities.map((amenity, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{amenity}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700 mb-2">Roommate</h3>
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 font-bold text-gray-600">
                                {studentInfo.roommate.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">{studentInfo.roommate}</p>
                                <p className="text-sm text-gray-500">{studentInfo.roommateProgram}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}