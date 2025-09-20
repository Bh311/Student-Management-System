export default function ReviewSubmit({ formData }) {
  // Calculate CGPA from SGPA array
  const sgpaArray = (formData.academics?.sgpa || []).filter(
    val => val >= 0 && val <= 10
  );
  const cgpa = sgpaArray.length
    ? (sgpaArray.reduce((sum, val) => sum + Number(val), 0) / sgpaArray.length).toFixed(2)
    : "-";

  // Get current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Full Name</label>
          <p className="p-2 rounded bg-gray-200">{formData.fullname || "-"}</p>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <p className="p-2 rounded bg-gray-200">{formData.email || "-"}</p>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Course</label>
          <p className="p-2 rounded bg-gray-200">{formData.academics?.course || "-"}</p>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">CGPA</label>
          <p className="p-2 rounded bg-gray-200">{cgpa}</p>
        </div>
      </div>

      {/* Application Status Box */}
      <div className="mt-6 p-4 border rounded bg-gray-50">
        <h3 className="font-semibold mb-2">Application Status</h3>
        <p className="p-2 rounded bg-gray-200">Application Submitted</p>
        <p className="text-sm text-gray-600 mt-1">{formattedDate} at {formattedTime}</p>
        <p className="mt-2 font-medium text-yellow-600">Under Review</p>
        <p className="text-sm text-gray-600 mt-1">
          Your application is being reviewed by our admissions team. You will be notified once a decision is made.
        </p>
      </div>
    </div>
  );
}
