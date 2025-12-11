import React, { useEffect, useState } from "react";
import axios from "axios";
import { DollarSign, BookOpen, Home, GraduationCap } from 'lucide-react'; // Import icons

export default function FeeStructure() {
  const [data, setData] = useState([]);
  const [editingFee, setEditingFee] = useState(null);
  const [formData, setFormData] = useState({
    course: "",
    semester: "",
    academicYear: "",
    tuition: "",
    hostel: "",
    library: "",
  });

  useEffect(() => {
    const fetchFees = async () => {
      try {
        const url = "/api/admin/fees/structures";
        const res = await axios.get(url);
        setData(res.data.data || []);
      } catch (err) {
        console.error("Error fetching fee structures:", err);
      }
    };
    fetchFees();
  }, []);

  const handleEdit = (fee) => {
    setEditingFee(fee);
    // Ensure numbers are converted to string for input fields
    setFormData({
      course: fee.course,
      semester: String(fee.semester), 
      academicYear: fee.academicYear,
      tuition: String(fee.breakdown.tuition),
      hostel: String(fee.breakdown.hostel),
      library: String(fee.breakdown.library),
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const updatedBreakdown = {
        tuition: Number(formData.tuition),
        hostel: Number(formData.hostel),
        library: Number(formData.library),
      };
      
      // Calculate total fee for sending to the API
      const newTotalFee = updatedBreakdown.tuition + updatedBreakdown.hostel + updatedBreakdown.library;

      const res = await axios.put(`/api/admin/fees/structures/${editingFee._id}`, {
        course: formData.course,
        semester: Number(formData.semester),
        academicYear: formData.academicYear,
        totalFee: newTotalFee, // Include totalFee in payload
        breakdown: updatedBreakdown,
      });

      // Update the local state with the new data
      setData((prev) =>
        prev.map((item) => (item._id === editingFee._id ? res.data.data : item))
      );

      
      setEditingFee(null); // close modal
    } catch (err) {
      console.error("Error updating fee structure:", err);
      alert("Failed to update fee structure. Check console for details.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/admin/fees/structures/${id}`);
      setData((prev) => prev.filter((fee) => fee._id !== id));
     
    } catch (err) {
      console.error("Error deleting fee structure:", err);
      alert("Failed to delete fee structure");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Fee Structures</h2>

      {/* --- Existing Structures List --- */}
      {data.length === 0 ? (
        <p className="text-gray-500 text-center">No fee structures defined yet...</p>
      ) : (
        data.map((fee) => (
          <div
            key={fee._id}
            className="flex justify-between items-center p-5 bg-white rounded-lg shadow mb-4 hover:shadow-md transition-all"
          >
            {/* Left: Course Details */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-700 font-bold">
                {fee.course.split(" ").slice(0, 2).map((word) => word[0]).join("")}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{fee.course}</h3>
                <p className="text-sm text-gray-500">
                  Semester {fee.semester} • {fee.academicYear}
                </p>
              </div>
            </div>

            {/* Center: Fee Breakdown */}
            <div className="flex flex-col items-end text-right">
              <span className="font-semibold text-gray-800">
                Total: ₹{fee.totalFee.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-gray-600">
                Tuition: ₹{fee.breakdown.tuition.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-gray-600">
                Hostel: ₹{fee.breakdown.hostel.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-gray-600">
                Library: ₹{fee.breakdown.library.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleEdit(fee)}
                className="px-4 py-2 rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(fee._id)}
                className="px-4 py-2 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* --- Modal Form for Editing (RESTYLED) --- */}
      {editingFee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3">
              Update Fee Structure for {editingFee.course}
            </h3>

            <div className="space-y-4">
              {/* Row 1: Course & Semester (Read-Only) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Course</label>
                  <input
                    name="course"
                    value={formData.course}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">Semester</label>
                  <input
                    name="semester"
                    value={formData.semester}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Row 2: Fee Breakdown */}
              <h4 className="text-lg font-semibold pt-2 text-gray-800">Fee Breakdown</h4>
              <div className="grid grid-cols-3 gap-3">
                {/* Tuition */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    <DollarSign size={16} className="inline mr-1 text-gray-500" /> Tuition Fee
                  </label>
                  <input
                    name="tuition"
                    value={formData.tuition}
                    onChange={handleChange}
                    type="number"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
                  />
                </div>
                {/* Hostel */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    <Home size={16} className="inline mr-1 text-gray-500" /> Hostel Fee
                  </label>
                  <input
                    name="hostel"
                    value={formData.hostel}
                    onChange={handleChange}
                    type="number"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
                  />
                </div>
                {/* Library */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    <BookOpen size={16} className="inline mr-1 text-gray-500" /> Library Fee
                  </label>
                  <input
                    name="library"
                    value={formData.library}
                    onChange={handleChange}
                    type="number"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Footer and Buttons */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                {/* Display Current Total Fee */}
                <div className="text-sm text-gray-600">
                    Calculated Total: 
                    <span className="font-bold text-blue-600 ml-1">
                        ₹{(Number(formData.tuition) + Number(formData.hostel) + Number(formData.library)).toLocaleString('en-IN')}
                    </span>
                </div>

                <div className="flex space-x-2">
                    <button
                        onClick={() => setEditingFee(null)}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUpdate}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Update
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}