import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

function RequestCard({ request }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'In Progress':
                return 'bg-blue-100 text-blue-600';
            case 'Resolved':
                return 'bg-green-100 text-green-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div>
                <p className="font-semibold text-gray-800 bg-gray-100">{request.issue}</p>
                <p className="text-sm text-gray-500">Submitted on {request.submittedDate}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                {request.status}
            </span>
        </div>
    );
}

export default function Maintenance() {
    const [issueType, setIssueType] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ issueType, priority, description });
        // Add logic to submit the request to your backend
    };
    
    const recentRequests = [
        { issue: 'Bathroom tap leaking', submittedDate: 'March 16, 2024', status: 'In Progress' },
        { issue: 'AC not cooling properly', submittedDate: 'March 14, 2024', status: 'Resolved' },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Maintenance Requests</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">Issue Type</label>
                        <select id="issueType" value={issueType} onChange={(e) => setIssueType(e.target.value)} className="mt-1 block w-full rounded-md  bg-gray-100 shadow-sm">
                            <option value="">Select issue type</option>
                            <option>Plumbing</option>
                            <option>Electrical</option>
                            <option>Carpentry</option>
                            <option>Pest Control</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
                        <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} className="mt-1 block w-full rounded-md  bg-gray-100 shadow-sm">
                            <option value="">Select priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="mt-1 block w-full rounded-md bg-gray-100 shadow-sm" placeholder="Describe the issue in detail..."></textarea>
                </div>
                <button type="submit" className="px-4 py-2 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500">
                    Submit Request
                </button>
            </form>
            
            <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Requests</h3>
                <div className="space-y-4">
                    {recentRequests.map((request, index) => (
                        <RequestCard key={index} request={request} />
                    ))}
                </div>
            </div>
        </div>
    );
}