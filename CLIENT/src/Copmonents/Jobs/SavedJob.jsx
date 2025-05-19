import Navbar from "../Navbar";
import AuthChecking from "../Auth/AuthChecking";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import CheckLocal from "../Auth/CheckLocal";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SavedJob() {
  const [display, setDisplay] = useState([]);
  const email = localStorage.getItem("user_email");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/job/all", {
          params: { email },
        });
        setDisplay(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch saved jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  localStorage.setItem("Total_saved", display.length);
  console.log(window.location);
  const ShowJob = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/job/${id}`);
      console.log(res);
      navigate("/job/Details", { state: res.data.message });
    } catch (err) {
      console.error("Error fetching job by ID:", err);
    }
  };

  const remove = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/job/Remove/${id}`);
      console.log(res.data.message, "delete id data ");
      if (res.data.message == "Job deleted successfully.") {
        toast.success(res.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error("Some thing went wrong");
      }
    } catch (err) {
      console.error("Error fetching job by ID:", err);
    }
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
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>

      <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-6 text-center text-red-700">
          Saved Jobs ({display.length})
        </h2>

        <div className="w-full max-w-3xl space-y-4">
          {display.length > 0 ? (
            display.map((data, id) => (
              <div
                key={id}
                className="bg-white p-5 rounded-xl shadow flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow"
                title={`click on the ${data.company_name
                  .charAt(0)
                  .toUpperCase()} More About the Company`}
              >
                <div className="flex items-center gap-3">
                  <div
                    title="click Here"
                    className="w-12 h-12 rounded-full bg-gray-100 text-blue-800 flex items-center justify-center text-lg font-bold"
                    onClick={() => ShowJob(data._id)}
                  >
                    {data.company_name
                      ? data.company_name.charAt(0).toUpperCase()
                      : ""}
                  </div>
                  <h3 className="text-lg font-medium text-blue-800">
                    {data.company_name}
                  </h3>
                </div>

                <button
                  title="Delete "
                  aria-label={`Delete job from ${data.company_name}`}
                  className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-600 rounded-lg hover:bg-red-500 hover:text-white transition duration-200"
                  onClick={() => remove(data._id)}
                >
                  <FiTrash2 className="text-xl" />
                  <span className="hidden sm:inline">Delete</span>
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No saved jobs found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SavedJob;
