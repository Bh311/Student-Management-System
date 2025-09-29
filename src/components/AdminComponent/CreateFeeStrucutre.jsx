import React, { useState } from 'react';
import axios from 'axios';
import { PlusCircle, DollarSign, BookOpen, Home, GraduationCap } from 'lucide-react';

// CSS to hide the number input spin buttons
const numberInputStyle = `
  /* Chrome, Safari, Edge, Opera */
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default function CreateFeeStructure() {
    const [formData, setFormData] = useState({
        course: '',
        semester: 1,
        academicYear: '2025-26', 
        tuition: '',
        hostel: '',
        library: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const tuition = parseFloat(formData.tuition || 0);
    const hostel = parseFloat(formData.hostel || 0);
    const library = parseFloat(formData.library || 0);
    const totalFee = tuition + hostel + library;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        if (!formData.course || !formData.semester || isNaN(tuition) || isNaN(hostel) || isNaN(library)) {
            setError('Please fill all required fields with valid numbers for fees.');
            setLoading(false);
            return;
        }

        const payload = {
            course: formData.course,
            semester: parseInt(formData.semester),
            academicYear: formData.academicYear,
            totalFee: totalFee,
            breakdown: {
                tuition: tuition,
                hostel: hostel,
                library: library
            }
        };

        try {
            const url = 'http://localhost:3000/api/admin/fees/structures';
            const token = localStorage.getItem('token'); 

            const response = await axios.post(url, payload, {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });

            if (response.data.success) {
                setMessage(`Success: ${response.data.message} for ${response.data.data.course} - Sem ${response.data.data.semester}`);
                setFormData({
                    course: '',
                    semester: 1,
                    academicYear: '2025-26',
                    tuition: '',
                    hostel: '',
                    library: '',
                });
            }
        } catch (err) {
            console.error("Fee structure creation failed:", err);
            setError(err.response?.data?.message || 'Failed to create fee structure. Check network/server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 md:p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-xl border border-gray-100 mt-8">
            {/* Inject the custom CSS to hide spinners */}
            <style dangerouslySetInnerHTML={{ __html: numberInputStyle }} /> 
            
            <div className="flex items-center justify-center mb-6">
                <h2 className="text-3xl font-extrabold text-gray-600">New Fee Structure</h2>
            </div>
            
            {message && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-4 text-sm" role="alert">
                    {message}
                </div>
            )}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-4 text-sm" role="alert">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Course and Semester */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                            <GraduationCap size={16} className="inline mr-1 text-gray-500" /> Course
                        </label>
                        <input
                            type="text" id="course" name="course" value={formData.course} onChange={handleChange} required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                            placeholder="e.g., B.Tech CSE"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
                            Semester
                        </label>
                        <input
                            type="number" id="semester" name="semester" value={formData.semester} onChange={handleChange} required min="1"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                            placeholder="e.g., 2"
                        />
                    </div>
                </div>

                {/* Academic Year */}
                <div className="flex flex-col">
                    <label htmlFor="academicYear" className="block text-sm font-medium text-gray-700 mb-1">
                        Academic Year
                    </label>
                    <input
                        type="text" id="academicYear" name="academicYear" value={formData.academicYear} onChange={handleChange} required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200 bg-gray-50 cursor-not-allowed"
                        readOnly
                    />
                </div>

                {/* Breakdown (Amounts) */}
                <h3 className="text-xl font-bold pt-4 text-gray-800 border-t border-gray-200 mt-6 pt-6">Fee Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="tuition" className="block text-sm font-medium text-gray-700 mb-1">
                            <DollarSign size={16} className="inline mr-1 text-gray-500" /> Tuition Fee
                        </label>
                        <input
                            // REMOVED step attribute
                            type="number" id="tuition" name="tuition" value={formData.tuition} onChange={handleChange} required min="0"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                            placeholder="e.g., 90000"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="hostel" className="block text-sm font-medium text-gray-700 mb-1">
                            <Home size={16} className="inline mr-1 text-gray-500" /> Hostel Fee
                        </label>
                        <input
                            // REMOVED step attribute
                            type="number" id="hostel" name="hostel" value={formData.hostel} onChange={handleChange} required min="0"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                            placeholder="e.g., 12000"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="library" className="block text-sm font-medium text-gray-700 mb-1">
                            <BookOpen size={16} className="inline mr-1 text-gray-500" /> Library Fee
                        </label>
                        <input
                            // REMOVED step attribute
                            type="number" id="library" name="library" value={formData.library} onChange={handleChange} required min="0"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-200"
                            placeholder="e.g., 7000"
                        />
                    </div>
                </div>

                {/* Total Fee Display */}
                <div className="pt-4 border-t border-gray-200 mt-6 flex justify-end">
                    <div className="text-right">
                        <p className="text-lg font-bold text-gray-800">
                            Total Fee: <span className="text-blue-600">₹{totalFee.toLocaleString('en-IN')}</span>
                        </p>
                        <p className="text-sm text-gray-500">Calculated sum of breakdown</p>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Creating...
                            </>
                        ) : (
                            <>
                                <PlusCircle size={20} className="mr-2" />
                                Create Fee Structure
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}