import { useEffect } from "react";
import Navbar from "../Navbar";
import AuthChecking from "./AuthChecking";

function Job() {
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
  return (
    <>
      <AuthChecking />
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>
    </>
  );
}

export default Job;
