import React, { useState } from "react";
import Navbar from "../Navbar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewAccount() {
  const [Name, Setname] = useState("");
  const [Email, Setemail] = useState("");
  const [Password, Setpassowrd] = useState("");
  const [ConfirmPwd, SetConfirmPwd] = useState("");
  const navigate = useNavigate();
  // adding new user
  const CreateAccount = async (e) => {
    e.preventDefault();
    const Newuser = {
      name: Name,
      email: Email,
      password: Password,
      confirm_password: ConfirmPwd,
    };
    if (
      Newuser.name == "" ||
      Newuser.email == "" ||
      Newuser.password == "" ||
      Newuser.confirm_password == ""
    ) {
      toast.error("Please fill all fields.");
    } else {
      const data = await axios.post("http://localhost:3000/Job/New/user", {
        Newuser,
      });
      console.log(data.data.message);
      if (data.data.message == "Fill the required Details!.") {
        toast.error(data.data.message);
      } else if (data.data.message == "Password are not same ") {
        toast.error(data.data.message);
      }
      toast.success("New Account Created");
      localStorage.setItem("token", data.data.token);
      setTimeout(() => {
        navigate("/job/Login");
      }, 1500);
    }
  };

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

      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create a New Account
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="User_name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="username"
                id="User_name"
                placeholder="Enter your name"
                onChange={(e) => Setname(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="user_email"
                onChange={(e) => Setemail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => Setpassowrd(e.target.value)}
                placeholder="Create a password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password *
              </label>
              <input
                type="password"
                id="confirm_password"
                onChange={(e) => SetConfirmPwd(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              onClick={CreateAccount}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewAccount;
