import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import SideMenu from "./SideMenu";

function Skills() {
  const data = "Skills";
   const navigate = useNavigate();

  const Next = () => {
    navigate("/Job/WorkExp");
  };

  const PrevForm = () => {
    navigate("/Job/EducationForm");
  };
  const Add = () => {
    alert("Adding the ");
  };
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <div className="flex max-w-7xl mx-auto mt-8 px-4 space-x-10">
        {/* Side Menu */}
        <div className="w-75 p-6 sticky top-20 h-screen -ml-4">
          <SideMenu data={data} />
        </div>

        {/* Form Section */}
        <main className="flex-1 bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="skills"
                className="block text-gray-700 font-semibold mb-2"
              >
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
              <label
                htmlFor="projectName"
                className="block text-gray-700 font-semibold mb-2"
              >
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
                <label
                  htmlFor="startDate"
                  className="block text-gray-700 font-semibold mb-2"
                >
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
                <label
                  htmlFor="endDate"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="currently"
                name="currently"
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="currently"
                className="text-gray-700 font-semibold"
              >
                Currently Working on this Project
              </label>
            </div>

            <div>
              <label
                htmlFor="projectLink"
                className="block text-gray-700 font-semibold mb-2"
              >
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

            <button
              type="button"
              onClick={Add}
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Add One More Project
            </button>

            <div className="flex justify-between mt-8 space-x-4">
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
