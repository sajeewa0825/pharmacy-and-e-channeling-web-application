import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDoctor from "./AdminDoctor/AdminDoctor";
import AdminHome from "./AdminHome/AdminHome";

const adminRouts = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="adminHome" element={<AdminHome />} />
          <Route path="adminDoctor" element={<AdminDoctor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default adminRouts;
