import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import SideMenu from "./SideMenu";

function EducationForm() {
  const Degrees = [
    "B.Tech (Bachelor of Technology)",
    "M.Tech (Master of Technology)",
    "B.Sc (Bachelor of Science)",
    "M.Sc (Master of Science)",
    "B.Com (Bachelor of Commerce)",
    "M.Com (Master of Commerce)",
    "B.A (Bachelor of Arts)",
    "M.A (Master of Arts)",
    "Ph.D (Doctor of Philosophy)",
    "Diploma",
    "Other",
  ];

  const data = "Education";
  const navigate = useNavigate();

  const Next = () => {
    navigate("/Job/Skills");
  };

  const PrevForm = () => {
    navigate("/Job/Profile");
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <div className="flex mt-12 max-w-7xl mx-auto">
        {/* Side Menu - fixed width and sticky on the left */}
        <div className="w-64 p-6 sticky top-20 h-screen">
          <SideMenu data={data} />
        </div>

        {/* Spacer */}
        <div className="w-16"></div>

        {/* Form area */}
        <div className="flex-1 p-10 rounded-lg shadow-lg bg-white">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Educational Background</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 10th School Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                10th School Name
              </label>
              <input
                type="text"
                placeholder="Enter school name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* 10th Percentage/Grade */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                10th Percentage/Grade
              </label>
              <input
                type="text"
                placeholder="Ex: 95% or 9.5 CGPA"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* 10th Grade */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                10th Grade
              </label>
              <input
                type="text"
                placeholder="Ex: A+"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* 12th School Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                12th School Name
              </label>
              <input
                type="text"
                placeholder="Enter school name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* 12th Percentage/Grade */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                12th Percentage/Grade
              </label>
              <input
                type="text"
                placeholder="Ex: 90% or 9.0 CGPA"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* 12th Grade */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                12th Grade
              </label>
              <input
                type="text"
                placeholder="Ex: A"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* College/University Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                College/University Name
              </label>
              <input
                type="text"
                placeholder="Ex: ABC University"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Degree */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Degree
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Degrees.map((degree, idx) => (
                  <option key={idx} value={degree}>
                    {degree}
                  </option>
                ))}
              </select>
            </div>

            {/* CGPA / Percentage */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                CGPA / Percentage
              </label>
              <input
                type="text"
                placeholder="Ex: 8.5 or 85%"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={PrevForm}
              className="bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition text-sm"
            >
              ⬅ Previous
            </button>
            <button
              type="button"
              onClick={Next}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition text-sm"
            >
              Save & Continue ➡
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationForm;
