import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiShare2 } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import axios from "axios";
import AuthChecking from "../Auth/AuthChecking";
import CheckLocal from "../Auth/CheckLocal";
import { toast, ToastContainer } from "react-toastify";

function Jobdetils() {
  const location = useLocation();
  const [details, setDetails] = useState({});
  const naivgate = useNavigate("");
  const email = localStorage.getItem("user_email");
  useEffect(() => {
    const Display = () => {
      setDetails(location.state || {});
    };
    Display();
  }, [location.state]);
  const send = async (LinkedIn) => {
    const shareData = {
      title: "MDN",
      text: "Learn web development on MDN!",
      url: LinkedIn,
    };
    await navigator.share(shareData);
  };

  // save the job data in to databse
  const Save = async (DataJOb) => {
    const sendJob = await axios.post("http://localhost:3000/Job/saved", {
      DataJOb,
      email,
    });
    if (sendJob.data.Alertmessage == "The Job Is Already saved") {
      toast.info(sendJob.data.message);
    }

    toast.success("You are Login");
    setTimeout(() => {
      naivgate("/Job/jobs");
    }, 1500);
  };
  return (
    <>
      <AuthChecking />
      <CheckLocal />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>

      {/* Floating Left Buttons */}
      <div className="hidden lg:flex flex-col gap-4 fixed top-28 left-8 z-40">
        <a
          href="/search"
          className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow transition text-sm"
        >
          <FiArrowLeft />
          Back
        </a>
        <button
          className="flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg shadow transition text-sm"
          onClick={() => send(details.company_linkedin)}
        >
          <FiShare2 />
          Share
        </button>
        <button
          className="flex items-center gap-2 text-black  hover:bg-gray-400 hover:text-white px-4 py-2 rounded-lg shadow transition text-sm"
          onClick={() => Save(details)}
        >
          <FiSave />
          Save
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 font-sans text-gray-800 leading-relaxed">
        <a
          href="/search"
          className="text-blue-600 hover:underline text-sm mb-4 inline-block"
        >
          ← Back to Jobs
        </a>

        <div className="bg-white shadow-md rounded-xl p-6">
          {/* Header Section */}

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <h1
              title={details.company_name}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-green-600 text-xl font-bold"
            >
              {details.company_name?.charAt(0) || ""}
            </h1>

            <div>
              <h2 className="text-2xl font-bold text-blue-700">
                {details.role}
              </h2>
              <p className="text-gray-600 text-base mt-1">
                <b className="text-shadow-gray-800"> {details.company_name}</b>{" "}
                • 📍{details.job_location}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Posted on {details.job_posting_date}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 border-t pt-4 space-y-6">
            {/* Job Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-gray-700">
                    Employment Type:
                  </span>{" "}
                  {details.employment_type == "Permanent" ? (
                    <b className="text-green-500">Permanent</b>
                  ) : null}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Experience:
                  </span>{" "}
                  {details.experience}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Salary:</span>{" "}
                  {details.salary} ({details.salary_type})
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Job Type:</span>{" "}
                  {details.job_type}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Location Type:
                  </span>{" "}
                  {details.location_type}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Ref No:</span>{" "}
                  {details.job_ref_number}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Deadline:</span>{" "}
                  {details.application_deadline}
                </p>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-gray-700">
                    Company Size:
                  </span>{" "}
                  {details.company_size}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Contact:</span>{" "}
                  {details.contact_person}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Diversity:
                  </span>{" "}
                  {details.diversity_inclusion}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Relocation:
                  </span>{" "}
                  {details.relocation_assistance}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Applications:
                  </span>{" "}
                  {details.total_applications_applied}
                </p>
              </div>
            </div>

            {/* Required Skills */}
            {details.required_skills?.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {details.required_skills.map((skill, i) => (
                    <span
                      key={i}
                      title={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools / Tech Stack */}
            {(details.tools?.length > 0 || details.tech_stack?.length > 0) && (
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  Tools & Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {details.tools?.map((tool, i) => (
                    <span
                      key={i}
                      title={tool}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                  {details.tech_stack?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Culture / Perks */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Company Culture & Benefits
              </h3>
              <p className="text-gray-600 text-base">
                {details.company_culture}
              </p>
              <p className="text-gray-600 text-base mt-2">
                {details.job_benefits}
              </p>
              <p className="text-gray-600 text-base mt-2">
                {details.job_perks}
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {details.company_linkedin && (
                <a
                  href={details.company_linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
                >
                  View on LinkedIn
                </a>
              )}
              {details.company_website && (
                <a
                  href={details.company_website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg text-sm"
                >
                  Visit Website
                </a>
              )}
              <button className="text-white bg-blue-800 hover:bg-blue-400 hover:cursor-pointer px-4 py-2 rounded-lg text-sm">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobdetils;
