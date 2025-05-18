import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthChecking() {
  const token = localStorage.getItem("TOKEN");
  const navigate=useNavigate("")
  useEffect(() => {
    const validate = async () => {
      const response = await axios.get("http://localhost:3000/Job/Auth", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (
        response.status === 401 &&
        response.data.message === "Token expired"
      ) {
        localStorage.removeItem("TOKEN"); // or clear auth state
        navigate("/job/Login");
      }
    };
    validate();
  }, []);
  return <div></div>;
}

export default AuthChecking;
