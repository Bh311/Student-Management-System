import React from 'react';

// Import the icons you need from lucide-react.
import {
  Settings,
} from 'lucide-react';

export default function Sidebar({ menuItems, activeItem, setActiveItem }) {
  const bottomMenuItem = { id: 'settings', label: 'Settings', icon: Settings };

  return (
    <div className="flex flex-col h-screen bg-white shadow-lg w-60">
      <div className="flex-grow pt-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`
              flex items-center w-full py-3 px-6 mb-2 text-gray-700
              focus:outline-none transition-all duration-200
              ${activeItem === item.id 
                ? 'bg-green-400 text-white rounded-r-full hover:bg-green-400' // Added hover effect for the active bar
                : 'hover:bg-gray-100 hover:text-gray-900'} // Default hover effect for inactive bars
            `}
          >
            <item.icon
              className={`mr-3 h-5 w-5 ${activeItem === item.id ? 'text-white' : 'text-gray-500'}`}
            />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="pb-8">
        <button
          onClick={() => setActiveItem(bottomMenuItem.id)}
          className={`
            flex items-center w-full py-3 px-6 mb-2 text-gray-700
            focus:outline-none transition-all duration-200
            ${activeItem === bottomMenuItem.id 
              ? 'bg-green-400 text-white rounded-r-full hover:bg-green-400' // Added hover effect for the active bar
              : 'hover:bg-gray-100 hover:text-gray-900'}
          `}
        >
          <bottomMenuItem.icon
            className={`mr-3 h-5 w-5 ${activeItem === bottomMenuItem.id ? 'text-white' : 'text-gray-500'}`}
          />
          <span className="font-medium">{bottomMenuItem.label}</span>
        </button>
      </div>
    </div>
  );
}