import React, { useState } from 'react';
import { DollarSign, CreditCard, Banknote } from 'lucide-react';

function FeeItem({ fee }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'text-orange-500 bg-orange-100';
            default:
                return 'text-gray-500 bg-gray-100';
        }
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <DollarSign size={20} />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">{fee.title}</h3>
                    <p className="text-sm text-gray-500">Due: {fee.dueDate}</p>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <span className="font-semibold text-gray-800">{fee.amount}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(fee.status)}`}>
                    {fee.status}
                </span>
            </div>
        </div>
    );
}

export default function MakePaymentContent() {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [paymentAmount, setPaymentAmount] = useState('27000');

    const outstandingFees = [
        { id: 1, title: 'Hostel Fee', amount: '₹25,000', dueDate: '2024-04-01', status: 'Pending' },
        { id: 2, title: 'Library Fee', amount: '₹2,000', dueDate: '2024-04-15', status: 'Pending' },
    ];
    const totalOutstanding = '₹27,000';

    const renderPaymentForm = () => {
        if (!selectedMethod) {
            return null; // Don't render a form until a method is selected
        }

        if (selectedMethod === 'Card') {
            return (
                <div className="space-y-4">
                    <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                            Card Number
                        </label>
                        <input type="text" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                                Expiry Date
                            </label>
                            <input type="text" id="expiry" placeholder="MM/YY" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2" />
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                CVV
                            </label>
                            <input type="text" id="cvv" placeholder="123" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2" />
                        </div>
                    </div>
                </div>
            );
        }

        if (selectedMethod === 'UPI') {
            return (
                <div>
                    <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">
                        UPI ID
                    </label>
                    <input type="text" id="upiId" placeholder="username@bank" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-4 py-2" />
                </div>
            );
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg  shadow mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column: Outstanding Fees */}
                <div className="bg-white p-6 rounded-lg ">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Outstanding Fees</h2>
                    <div className="space-y-4">
                        {outstandingFees.map((fee) => (
                            <FeeItem key={fee.id} fee={fee} />
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-6 p-4 border-t border-gray-200">
                        <span className="text-lg font-bold text-gray-800">Total Outstanding:</span>
                        <span className="text-lg font-bold text-red-600">{totalOutstanding}</span>
                    </div>
                </div>

                {/* Right Column: Make Payment Form */}
                <div className="bg-white p-6 rounded-lg ">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Make Payment</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                                Payment Amount
                            </label>
                            <input
                                type="text"
                                name="amount"
                                id="amount"
                                className="block w-full rounded-md border-gray-300 shadow-sm px-4 py-2"
                                value={paymentAmount}
                                onChange={(e) => setPaymentAmount(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Payment Method
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setSelectedMethod('Card')}
                                    className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-colors ${selectedMethod === 'Card' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}
                                >
                                    <CreditCard size={24} className="text-gray-600" />
                                    <span className="mt-2 text-sm font-medium text-gray-800">Card</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSelectedMethod('UPI')}
                                    className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-colors ${selectedMethod === 'UPI' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}`}
                                >
                                    <Banknote size={24} className="text-gray-600" />
                                    <span className="mt-2 text-sm font-medium text-gray-800">UPI</span>
                                </button>
                            </div>
                        </div>

                        {renderPaymentForm()}

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Pay ₹{paymentAmount}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}