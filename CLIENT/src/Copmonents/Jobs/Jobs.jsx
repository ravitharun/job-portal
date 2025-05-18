import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function Jobs() {
  const [Display, setDisplay] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/jobAll");
        setDisplay(response.data.message);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  const etJobById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/job/${id}`);
   
      navigate("/job/Details", { state: res.data.message });
    } catch (err) {
      console.error("Error fetching job by ID:", err);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>

      <div className="flex min-h-screen bg-gray-50">
        {/* Left Sidebar - Filter Panel */}
        <aside className="w-72 bg-white p-6 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto border-r border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Filter Jobs</h2>

          {/* Example filters */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Job Type</label>
            <select className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Experience Level</label>
            <select className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Apply Filters
          </button>
        </aside>

        {/* Right Side - Job List */}
        <main className="flex-1 p-6 space-y-6">
          {/* Search Input Centered */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search job titles, companies..."
              className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {Display.length === 0 && (
            <p className="text-gray-500 text-center">No jobs found.</p>
          )}

          {Display.map((job, id) => (
            <div
              key={id}
              onClick={() => etJobById(job._id)}
              className="bg-white rounded shadow p-5 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="text-sm text-gray-500">{job.location}</span>
              </div>
              <p className="text-gray-700 mb-2">{job.company_name}</p>
              <p className="text-indigo-600 font-medium">{job.salary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tech_stack?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export default Jobs;
