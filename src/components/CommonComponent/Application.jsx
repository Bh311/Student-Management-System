import { useState } from "react";
import PersonalInfo from './PersonalInfo';
import AcademicDetails from './Academic';
import ReviewSubmit from './SubmitApp';
import Head from './HeadinRegister.jsx';
import Counter from './Counter.jsx';

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState(""); // error message state

  // Central form data
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    academics: {
      course: "",
      semester: "1",
      sgpa: [],
      tenthSchool: "",
      tenthPercent: "",
      twelfthSchool: "",
      twelfthPercent: ""
    }
  });

  // Validation function
  const validateStep = () => {
    if (step === 1) {
      const { fullname, email, phone, dob, gender, address } = formData;
      if (!fullname || !email || !phone || !dob || !gender || !address) {
        setError("⚠️ Please fill all required Personal Info fields!");
        return false;
      }
    } else if (step === 2) {
      const { course, semester, sgpa, tenthSchool, tenthPercent, twelfthSchool, twelfthPercent } =
        formData.academics;
      if (!course || !semester || !tenthSchool || !tenthPercent || !twelfthSchool || !twelfthPercent) {
        setError("⚠️ Please fill all required Academic Details fields!");
        return false;
      }
      if (Number(semester) > 1 && sgpa.length < semester - 1) {
        setError("⚠️ Please enter SGPA for all previous semesters!");
        return false;
      }
    }
    setError(""); // clear error if valid
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    if (validateStep()) {
      setError(""); // clear errors
      console.log("Submitted Data:", formData);
      alert("✅ Application submitted successfully!");
    }
  };

  return (
    <div className="p-6 border-white/20 rounded-lg shadow-md bg-white max-w-3xl mx-auto ">
      <div className="flex flex-col mt-10 ml-5 mr-8 p-5 rounded-lg border border-gray-300">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg font-semibold">Application Progress</h1>
          <Counter />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <Head name="Personal Info" step={step} index={1} />
          <Head name="Academic Details" step={step} index={2} />
          <Head name="Review & Submit" step={step} index={3} />
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-oklch(74.6% 0.16 232.661) rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-6">
        {step === 1 && (
          <>
            <PersonalInfo formData={formData} setFormData={setFormData} />
            {error && step === 1 && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </>
        )}
        {step === 2 && (
          <>
            <AcademicDetails formData={formData} setFormData={setFormData} />
            {error && step === 2 && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </>
        )}
        {step === 3 && <ReviewSubmit formData={formData} />}
      </div>

      <div className="flex justify-between mt-6">
        {step === 1 && (
          <button onClick={prevStep} className="px-4 py-2 bg-white rounded-lg"></button>
        )}
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
          >
            Next Step
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 flex items-center gap-1"
          >
            Submit Application
          </button>
        )}
      </div>
    </div>
  );
}
