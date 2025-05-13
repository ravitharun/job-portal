import axios from "axios";
import React from "react";
import { useEffect } from "react";

function AuthChecking() {
  const token = localStorage.getItem("TOKEN");
  useEffect(() => {
    const validate = async () => {
      const Validating = await axios.get("http://localhost:3000/Job/Auth", {
        headers: { Authorization: `Bearer ${token}` },
      });
   
    };

    validate();
  }, []);
  return <div></div>;
}

export default AuthChecking;
