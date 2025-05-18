import React from "react";
import Navbar from "../Navbar";
import AuthChecking from "../Auth/AuthChecking";
import { useEffect } from "react";

import CheckLocal from "../Auth/CheckLocal";
import axios from "axios";
function SavedJob() {
  useEffect(() => {
    const validate = () => {
      const token = localStorage.getItem("TOKEN");
      if (!token) {
        // Redirect to login page or show a message
        window.location.href = "job/Login";
      }
    };
    validate();
  }, []);

  useEffect(() => {
    const Disply = async () => {
      const reponse = await axios.get("");
      console.log(reponse)
    };
    Disply();
  }, []);

  return (
    <>
      <AuthChecking />
      <CheckLocal />
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>
    </>
  );
}

export default SavedJob;
