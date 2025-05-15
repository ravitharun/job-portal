import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Copmonents/Auth/Login.jsx";
import Home from "./Copmonents/Home";
import NewAccount from "./Copmonents/Auth/NewAccount.jsx";
import Job from "./Copmonents/Auth/Job.jsx";
import Profile from "./Copmonents/Profile/Profile.jsx";
import EductaionForm from "./Copmonents/Profile/EductaionForm.jsx";
import Skills from "./Copmonents/Profile/Skills.jsx";
import Workexp from "./Copmonents/Profile/Workexp.jsx";
import Resume from "./Copmonents/Profile/Resume.jsx";
import Links from "./Copmonents/Profile/Links.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Job/Search" element={<Job />} />
      <Route path="/Job/Profile" element={<Profile />} />
      <Route path="/Job/Skills" element={<Skills />} />
      <Route path="/Job/WorkExp" element={<Workexp />} />
      <Route path="/Job/resume" element={<Resume />} />
      <Route path="/Job/Online" element={<Links />} />
      <Route path="/Job/EducationForm" element={<EductaionForm />} />
      <Route path="/job/Login" element={<Login />} />
      <Route path="/job/signup" element={<NewAccount />} />
    </Routes>
  </BrowserRouter>
);
