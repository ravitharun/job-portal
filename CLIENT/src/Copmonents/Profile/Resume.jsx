import React from "react";
import Navbar from "../Navbar";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";

function Resume() {
  const data = "Resume Upload";
  const navigate = useNavigate();

  const Next = () => {
    navigate("/Job/Online");
  };

  const PrevForm = () => {
    navigate("/Job/WorkExp");
  };
  return (
<>
  {/* Navbar */}
  <div className="sticky top-0 z-50 bg-white shadow-md">
    <Navbar />
  </div>

  {/* Main Layout */}
  <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-8 px-4 gap-8">
    
    {/* Side Menu */}
   <div className="w-70 p-4 sticky top-20 h-screen rounded-xl  -ml-4">
          <SideMenu data={data} />
        </div>

    {/* Resume Upload Form */}
    <form className="flex-1 bg-white p-6 rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Resume</h2>

      {/* File Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Your Resume <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
          file:rounded-md file:border-0 file:text-sm file:font-semibold 
          file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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
          Next
        </button>
      </div>
    </form>
  </div>
</>

  );
}

export default Resume;
