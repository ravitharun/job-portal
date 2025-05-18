import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import SideMenu from "./SideMenu";
import { useState } from "react";
import AuthChecking from "../Auth/AuthChecking";
import CheckLocal from "../Auth/CheckLocal";

function Skills() {
  const navigate = useNavigate();
  const [Disable, setdisable] = useState(false);
  const [ShowForm, SetShowForm] = useState(false);
  const [Form, SetForm] = useState([
    { type: "text" },
    { type: "date" },
    { type: "date" },
    { type: "checkbox" },
    { type: "url" },
  ]);
  let projects = 0;
  const data = "Skills";

  const Next = () => {
    navigate("/Job/WorkExp");
  };

  const PrevForm = () => {
    navigate("/Job/EducationForm");
  };

  const Add = () => {
    alert("Adding the ");
    SetShowForm(true);
    console.log((projects += 1));
  };

  const Validate = () => {
    setdisable(!Disable);
  };

  return (
    <>
      <AuthChecking />
      <CheckLocal />
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-0 md:space-x-10">
        {/* Side Menu */}
        <div className="w-full md:w-[250px] sticky top-20">
          <SideMenu data={data} />
        </div>

        {/* Form Section */}
        <main className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="skills" className="block text-gray-700 font-semibold mb-2">
                Skills <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                placeholder="Your skills"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-4">Projects</h2>

            <div>
              <label htmlFor="projectName" className="block text-gray-700 font-semibold mb-2">
                Project Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                placeholder="Project Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="startDate" className="block text-gray-700 font-semibold mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="endDate" className="block text-gray-700 font-semibold mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  disabled={Disable}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                onClick={Validate}
                id="currently"
                name="currently"
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="currently" className="text-gray-700 font-semibold">
                Currently Working on this Project
              </label>
            </div>

            <div>
              <label htmlFor="projectDesc" className="block text-gray-700 font-semibold mb-2">
                Project Description
              </label>
              <textarea
                id="projectDesc"
                placeholder="Project Description"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label htmlFor="projectLink" className="block text-gray-700 font-semibold mb-2">
                Project Link
              </label>
              <input
                type="url"
                id="projectLink"
                name="projectLink"
                placeholder="https://yourprojectlink.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Additional Projects */}
            {ShowForm &&
              Form.map((project, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 p-6 my-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Project {index + 2}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Project Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        disabled={Disable}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        onClick={Validate}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="text-gray-700 font-semibold">
                        Currently Working on this Project
                      </label>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Description
                      </label>
                      <textarea
                        rows="3"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}

            <button
              type="button"
              onClick={Add}
              className="w-full md:w-auto inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Add One More Project
            </button>

            <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
              <button
                type="button"
                onClick={PrevForm}
                className="flex-1 bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-400 transition"
              >
                Previous
              </button>
              <button
                type="submit"
                onClick={Next}
                className="flex-1 bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Save & Next
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Skills;
