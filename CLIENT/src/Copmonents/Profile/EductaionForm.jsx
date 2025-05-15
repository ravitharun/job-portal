import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import SideMenu from "./SideMenu";

function EductaionForm() {
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
  const PrevForm=()=>{
    navigate("/Job/Profile")
  }
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <div className="flex">
        {/* Side Menu */}
        <div className="w-64 border-r border-gray-200 bg-gray-50 p-6 min-h-screen">
          <SideMenu data={data} />
        </div>

        {/* Education Form */}
        <div className="flex-1 p-10 bg-white rounded-lg shadow-lg mx-8 my-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Educational Background
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 10th */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                10th School Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter school name"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                10th Percentage/Grade
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 95% or 9.5 CGPA"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                10th Grade
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: A+"
              />
            </div>

            {/* 12th */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                12th School Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter school name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                12th Percentage/Grade
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 90% or 9.0 CGPA"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                12th Grade
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: A"
              />
            </div>

            {/* College */}
            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                College/University Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: ABC University"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                Degree
              </label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                {Degrees.map((degree, index) => (
                  <option key={index} value={degree}>
                    {degree}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2 text-gray-700">
                CGPA / Percentage
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 8.5 or 85%"
              />
            </div>
          </form>

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={PrevForm}
              className="bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition"
            >
              ⬅ Previous
            </button>
            <button
              type="submit"
              onClick={Next}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Save & Continue ➡
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EductaionForm;
