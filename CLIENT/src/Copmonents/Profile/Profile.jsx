import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";

function Profile() {
  const [ProfileCheck, SetProfileCheck] = useState(false);

  const [FullName, SetFullName] = useState("");
  const [Email, SetEmail] = useState("");
  const [PhoneNumber, SetPhoneNumber] = useState("");
  const data = { FullName: FullName, Email: Email, PhoneNumber: PhoneNumber };
  const [GetData, SetData] = useState({});
  const navigate = useNavigate();
  const Next = (event) => {
    event.preventDefault();
    navigate("/Job/EducationForm", { state: GetData });
    SetData(data);
  };
  return (
<>
  <div className="sticky top-0 z-50 bg-white shadow-md">
    <Navbar />
  </div>

  <div className="flex mt-12 max-w-7xl mx-auto">
    {/* Side Menu - fixed width and sticky on the left */}
    <div className="w-64 p-6 sticky top-20 h-screen">
      <SideMenu />
    </div>

    {/* Spacer between menu and form */}
    <div className="w-16"></div> {/* This is the gap */}

    {/* Form on the right, takes remaining space */}
    <div className="flex-1 p-10  rounded-lg shadow-lg">
      <div className="flex items-center mb-6 space-x-4">
        <img
          src="https://www.glassdoor.co.in/assets/images/profiles-next/page-headers/musicians.png"
          alt="Profile Icon"
          className="w-12 h-12 object-contain"
        />
        <h1 className="text-3xl font-bold text-gray-900">Complete Your Profile</h1>
      </div>

      <p className="text-gray-600 mb-8">
        Fill in your personal info to create your job profile.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block mb-2 font-semibold text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="FullName"
            onChange={(e) => SetFullName(e.target.value)}
            placeholder="John Doe"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="userEmail" className="block mb-2 font-semibold text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="userEmail"
            name="Email"
            onChange={(e) => SetEmail(e.target.value)}
            placeholder="john.doe@example.com"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="userPhoneNumber" className="block mb-2 font-semibold text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="userPhoneNumber"
            name="PhoneNumber"
            maxLength={10}
            onChange={(e) => SetPhoneNumber(e.target.value)}
            placeholder="1234567890"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">Enter your 10-digit phone number.</p>
        </div>
      </form>

      <button
        onClick={Next}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
      >
        Next
      </button>
    </div>
  </div>
</>




  );
}

export default Profile;
