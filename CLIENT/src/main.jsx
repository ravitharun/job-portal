import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Copmonents/Auth/Login.jsx";
import Home from "./Copmonents/Home";
import NewAccount from "./Copmonents/Auth/NewAccount.jsx";
import Job from "./Copmonents/Auth/Job.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Job/Search" element={<Job />} />
      <Route path="/job/Login" element={<Login />} />
      <Route path="/job/signup" element={<NewAccount />} />
    </Routes>
  </BrowserRouter>
);
