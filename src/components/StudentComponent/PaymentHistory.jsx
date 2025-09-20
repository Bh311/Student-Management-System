import React from 'react';

export default function PaymentHistoryContent() {
    // Dummy data with a new `feeType` property
    const historyData = [
        { id: 1, date: "2024-01-15", amount: "₹35,000", feeType: "Hostel Fee", status: "Paid", semester: "Spring 2024" },
        { id: 2, date: "2023-08-20", amount: "₹30,000", feeType: "Tution Fee", status: "Paid", semester: "Fall 2023" },
        { id: 3, date: "2023-01-18", amount: "₹32,000", feeType: "Library Fee", status: "Paid", semester: "Spring 2023" },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow mt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment History</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Fee Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Semester
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {historyData.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.feeType}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.semester}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}