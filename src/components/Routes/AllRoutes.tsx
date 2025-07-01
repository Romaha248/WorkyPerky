import React from "react";
import { Route, Routes } from "react-router-dom";

import AllCities from "../AllCities/AllCities";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../Authentication/LoginPage";
import RegisterPage from "../Authentication/RegisterPage";
import AllCafes from "../AllCafes/AllCafes";

const AllRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/cities" element={<AllCities />} />
    <Route path="/cities/:cafe" element={<AllCafes />} />
  </Routes>
);

export default AllRoutes;
