import React from "react";
import Navbar from "../Navbar";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";
import AuthChecking from "../Auth/AuthChecking";
import CheckLocal from "../Auth/CheckLocal";

function Links() {
  const data = "Online Presence";
  const navigate = useNavigate();

  const Next = () => {
    navigate("/Job/Online");
  };

  const PrevForm = () => {
    navigate("/Job/WorkExp");
  };
  return (
    <>
      <AuthChecking />
      <CheckLocal />
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-8 px-4 gap-8">
        {/* Side Menu */}
        <div className="md:w-70 w-full p-4 sticky top-20 h-fit md:h-screen rounded-xl ">
          <SideMenu data={data} />
        </div>

        {/* Form Section */}
        <form className="flex-1 bg-white p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Additional Details
          </h2>
          {/* Certificate Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Any Certificate Course
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
          file:rounded-md file:border-0 file:text-sm file:font-semibold 
          file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
            />
          </div>
          {/* LinkedIn URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/your-profile"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Portfolio Website
            </label>
            <input
              type="url"
              placeholder="https://Portfolio/Website/your-profile"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            {/* Languages Known communication   */}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Languages Known communication
            </label>
            <input
              type="text"
              placeholder="English"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Expected Salary (CTC) */}
          <div>
            {/* Languages Known communication   */}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Salary (CTC)
            </label>
            <input
              type="text"
              placeholder="13Lpa"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              id="relocate"
              type="checkbox"
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="relocate"
              className="text-gray-700 font-medium select-none"
            >
              Willing to Relocate
            </label>
          </div>

          {/* GitHub URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GitHub
            </label>
            <input
              type="url"
              placeholder="https://github.com/your-username"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={PrevForm}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={Next}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Links;
