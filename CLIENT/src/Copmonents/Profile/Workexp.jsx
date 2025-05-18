import React from "react";
import Navbar from "../Navbar";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";
import AuthChecking from "../Auth/AuthChecking";
import CheckLocal from "../Auth/CheckLocal";

function Workexp() {
  const data = "Work Experience";

  const navigate = useNavigate();

  const Next = () => {
    navigate("/Job/resume");
  };

  const PrevForm = () => {
    navigate("/Job/Skills");
  };
  return (
    <>
      {" "}
      <AuthChecking />
      <CheckLocal />
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>
      {/* Layout */}
      <div className="flex max-w-7xl mx-auto mt-8 px-4 space-x-8">
        {/* Side Menu */}
        <div className="w-70 p-4 sticky top-20 h-screen rounded-xl  -ml-4">
          <SideMenu data={data} />
        </div>

        {/* Work Experience Form */}
        <form className="flex-1 bg-white p-6 rounded-xl shadow-md space-y-5">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Work Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                placeholder="e.g. Frontend Developer"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                placeholder="e.g. Google"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                placeholder="e.g. Bangalore / Remote"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Briefly describe your role and responsibilities..."
                className="w-full mt-1 px-3 py-2 border rounded-md h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>
          <button
            type="button"
            className="mt-4 px-5 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition duration-300"
          >
            + Add Another Experience
          </button>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={PrevForm}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={Next}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save & Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Workexp;
