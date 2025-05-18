import React from 'react'
import { useEffect } from 'react';

function CheckLocal() {
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
    <div>
      
    </div>
  )
}

export default CheckLocal
