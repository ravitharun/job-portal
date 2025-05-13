import { useState } from "react";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [login, SetLogin] = useState(false);
  const navi = useNavigate();
  const Send = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };
    if (data.email == "" && data.password == "") {
      toast.error("Please fill all fields.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      return;
    } else {
      const Data = await axios.post("http://localhost:3000/Job/Login", {
        data,
      });
      SetLogin(true);
      localStorage.setItem("TOKEN", Data.data.message);
    }
    
    toast.success("You are Login");
    setTimeout(() => {
      navi("/");
    }, 1500);
  };
  localStorage.setItem("Login", login);
  return (
    <>
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Login to Your Account
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => Setemail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => Setpassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={Send}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
          <div className="mt-4 flex justify-between text-sm">
            <Link
              to="/job/signup"
              className="text-blue-600 hover:underline text-blue-300"
            >
              Don't have an account? Sign Up
            </Link>

            <Link
              to="/job/forgot"
              className="text-blue-600 hover:underline text-blue-300"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
