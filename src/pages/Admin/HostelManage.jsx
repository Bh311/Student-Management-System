import React, { useState } from 'react';
import { Search, Bed, Users, Clock, Building2 } from 'lucide-react';
import Hero from '../../components/CommonComponent/HeroSection';
import Option from "../../components/CommonComponent/TabSwitcher"; // Assuming this is your TabSwitcher component

// Import the specific page components
import BlockOverview from '../../components/AdminComponent/BlockOverview'; // Assuming this component exists
import RoomRequests from '../../components/AdminComponent/RoomRequests'; // Assuming this component exists
import WaitingList from '../../components/AdminComponent/WaitingList'; // Assuming this component exists

export default function Hostel() {
    const [activeTab, setActiveTab] = useState('Block Overview');

    const tabs = ['Block Overview', 'Room Requests', 'Waiting List'];

    const renderContent = () => {
        switch (activeTab) {
            case 'Block Overview':
                return <BlockOverview />;
            case 'Room Requests':
                return <RoomRequests />;
            case 'Waiting List':
                return <WaitingList />;
            default:
                return <BlockOverview />;
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Header section */}
            <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-6">
                {/* Left side: Title */}
                <h1 className="text-2xl font-bold text-gray-800">Hostel Management</h1>

                {/* Right side: Search and Button */}
                <div className="flex items-center space-x-4">
                    {/* Search Input */}
                    <div className="flex items-center bg-gray-100 rounded-lg p-2">
                        <Search size={20} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search rooms..."
                            className="bg-transparent border-none focus:outline-none ml-2 text-gray-700"
                        />
                    </div>
                    {/* Assign Room Button */}
                    <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                        <Users size={16} />
                        <span>Assign Room</span>
                    </button>
                </div>
            </div>

            {/* Hero cards section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {/* Total Capacity Card */}
                <Hero
                    title="Total Capacity"
                    value="300"
                    status="students"
                    icon={<Building2 size={20} className="text-blue-600" />}
                    color="bg-blue-100"
                    statusColor="text-gray-500"
                />

                {/* Current Occupancy Card */}
                <Hero
                    title="Current Occupancy"
                    value="269"
                    status={null}
                    icon={<Users size={20} className="text-green-600" />}
                    color="bg-green-100"
                />

                {/* Available Rooms Card */}
                <Hero
                    title="Available Rooms"
                    value="15"
                    status="across all blocks"
                    icon={<Bed size={20} className="text-orange-500" />}
                    color="bg-orange-100"
                    statusColor="text-gray-500"
                />

                {/* Waiting List Card */}
                <Hero
                    title="Waiting List"
                    value="28"
                    status="students waiting"
                    icon={<Clock size={20} className="text-red-600" />}
                    color="bg-red-100"
                    statusColor="text-gray-500"
                />
            </div>

            {/* Tab switcher */}
            <div className="mb-6">
                <Option tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Render content based on active tab */}
            {renderContent()}
        </div>
    );
}