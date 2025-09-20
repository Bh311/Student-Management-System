export default function PersonalInfo({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="mb-1">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-2  rounded bg-gray-200"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-200"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="mb-1">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setFormData({ ...formData, phone: value });
              }
            }}
            placeholder="Phone"
            className="w-full p-2 rounded bg-gray-200"
          />
          {formData.phone && (
            (formData.phone.length !== 10 ||
              Number(formData.phone) < 0 ||
              formData.phone.startsWith("0")) && (
              <p className="text-red-600 text-sm mt-1">
                ⚠️ Please enter a valid 10-digit phone number.
              </p>
            )
          )}
        </div>

        {/* DOB */}
        <div className="flex flex-col">
          <label className="mb-1">
            Date of Birth <span className="text-red-600">*</span>
          </label>
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200"
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label className="mb-1">
            Gender <span className="text-red-600">*</span>
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-200"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="mb-1">
            Address <span className="text-red-600">*</span>
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your complete address"
            className="w-full p-2 rounded bg-gray-200"
          />
        </div>

        {/* Profile Picture (Optional) */}
        <div className="flex flex-col col-span-2">
          <label className="mb-1">
            Profile Picture <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 rounded bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
